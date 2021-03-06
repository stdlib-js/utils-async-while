/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@stdlib/utils-noop' );
var whileAsync = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof whileAsync, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a predicate function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			whileAsync( value, noop, noop );
		};
	}
});

tape( 'the function throws an error if not provided a function to invoke', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			whileAsync( noop, value, noop );
		};
	}
});

tape( 'the function throws an error if not provided a callback function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			whileAsync( noop, noop, value );
		};
	}
});

tape( 'while a test condition is true, the function invokes a provided function', function test( t ) {
	var indices1 = [ 0, 1, 2, 3, 4, 5 ];
	var indices2 = [ 0, 1, 2, 3, 4 ];
	var j = -1;
	var k = -1;

	whileAsync( predicate, fcn, done );

	function predicate( i, clbk ) {
		j += 1;
		t.strictEqual( i, indices1[ j ], 'provides expected value' );
		clbk( null, i < 5 );
	}

	function fcn( i, next ) {
		k += 1;
		t.strictEqual( i, indices2[ k ], 'provides expected value' );
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			next();
		}
	}

	function done( error ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.ok( true, 'does not return an error' );
		}
		t.end();
	}
});

tape( 'while a test condition is true, the function invokes a provided function (always false)', function test( t ) {
	var indices = [ 0 ];
	var j = -1;

	whileAsync( predicate, fcn, done );

	function predicate( i, clbk ) {
		j += 1;
		t.strictEqual( i, indices[ j ], 'provides expected value' );
		clbk( null, false );
	}

	function fcn( i, next ) {
		t.fail( 'should never be invoked' );
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			next();
		}
	}

	function done( error ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.ok( true, 'does not return an error' );
		}
		t.end();
	}
});

tape( 'the function supports providing an execution context', function test( t ) {
	var ctx = {
		'count': 0
	};

	whileAsync( predicate, fcn, done, ctx );

	function predicate( i, clbk ) {
		clbk( null, i < 5 );
	}

	function fcn( i, next ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			next();
		}
	}

	function done( error ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.ok( true, 'does not return an error' );
		}
		t.strictEqual( ctx.count, 5, 'updates context' );
		t.end();
	}
});

tape( 'the function provides any results to a `done` callback', function test( t ) {
	whileAsync( predicate, fcn, done );

	function predicate( i, clbk ) {
		clbk( null, i < 5 );
	}

	function fcn( i, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			next( null, 'beep'+i, 'boop'+i, 'woot'+i );
		}
	}

	function done( error, str1, str2, str3 ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.ok( true, 'does not return an error' );
		}
		t.strictEqual( str1, 'beep4', 'returns expected value' );
		t.strictEqual( str2, 'boop4', 'returns expected value' );
		t.strictEqual( str3, 'woot4', 'returns expected value' );
		t.end();
	}
});

tape( 'if an error is encountered when invoking the predicate function, the function suspends execution and immediately returns the `error` to the provided callback', function test( t ) {
	var k = 0;
	whileAsync( predicate, fcn, done );

	function predicate( i, clbk ) {
		k += 1;
		if ( i === 1 ) {
			return clbk( new Error( 'beep' ) );
		}
		clbk( null, i < 5 );
	}

	function fcn( i, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			next();
		}
	}

	function done( error ) {
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'should return an error' );
		}
		t.strictEqual( k, 2, 'expected number of invocations' );
		t.end();
	}
});

tape( 'if an error is encountered when invoking the provided function, the function suspends execution and immediately returns the `error` to the provided callback', function test( t ) {
	var k = 0;
	whileAsync( predicate, fcn, done );

	function predicate( i, clbk ) {
		k += 1;
		clbk( null, i < 5 );
	}

	function fcn( i, next ) {
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			if ( i === 2 ) {
				return next( new Error( 'boop' ) );
			}
			next();
		}
	}

	function done( error ) {
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'should return an error' );
		}
		t.strictEqual( k, 3, 'expected number of invocations' );
		t.end();
	}
});

tape( 'the function does not guarantee asynchronous execution', function test( t ) {
	var k = 0;
	whileAsync( predicate, fcn, done );
	k = 1;

	function predicate( i, clbk ) {
		clbk( null, i < 5 );
	}

	function fcn( i, next ) {
		next();
	}

	function done( error ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.ok( true, 'does not return an error' );
		}
		t.strictEqual( k, 0, 'releases the zalgo' );
		t.end();
	}
});
