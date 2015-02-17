var when = function when( condition ){
	if( !( "namespaces" in when ) ){
		when.namespaces = { };
	}
 
	if( !( "methods" in when ) ){
		when.methods = { };
	}
 
	var data = {
		"conditions": [ ],
		"event": null
	};
 
	var methods = { };
 
	var options = { };
 
	var bind = function bind( method ){
		Object.defineProperty( methods, method.name,
			{
				"enumerable": false,
				"configurable": false,
				"get": function get( ){
					return when.methods[ method.name ] || method;
				},
				"set": function set( ){ }
			} );
	};
 
	/*:
		A simple feature that let's you extend the library.
		Plugin should be a function.
	*/
	var include = function include( plugin ){
		if( typeof plugin == "function" ){
			plugin.apply( {
				"data": data,
				"methods": methods,
				"options": options
			} );
		}
 
		return methods;
	};
 
	var createEvent = function createEvent( ){
		var event = new Event( data.namespace );
	};
 
	var setNamespace = function setNamespace( namespace ){
		if( !( "namespace" in data ) ){
			data.namespace = namespace;	
		}
	};
 
	var appendConditions = function appendConditions( condition ){
		data.conditions.push( function delegateCondition( ){
			delegateCondition.reference = condition.name;
 
			return condition.apply( this, Array.prototype.slice.call( arguments ) );
		} );
	};
 
	var evaluateAction = function evaluateAction( action ){
		if( typeof action == "string" ){
			setNamespace( action );
 
		}else if( typeof action == "function" ){
			appendConditions( action );
		}
	};
 
	if( arguments.length == 1 ){
		evaluateAction( condition );
	}
 
	var of = function of( namespace ){
		if( !dataSet.namespace ){
			data.namespace = namespace;
		}
 
		return methods;
	};
 
	var then = function then( action, reference ){
		evaluateAction( action );
 
		data.executor = function executor( ){
 
		};
 
		data.executor.reference = reference;
 
		document.addEventListener( this.namespace )
 
		return methods;
	};
 
	var fire = function fire( parameters ){
 
	};
 
	var drop = function drop( reference ){
		if( this.namespace && 
			this.namespace in when.namespaces )
		{
			if( reference && 
				typeof reference == "string" )
			{
				var conditions = when.namespaces[ this.namespace ];
				var length =conditions.length;
				for( var index = 0; index <  )	
			}
		}
	};
 
	bind( of );
 
	bind( then );
 
	bind( fire );
 
	bind( drop );
 
	return methods;
};