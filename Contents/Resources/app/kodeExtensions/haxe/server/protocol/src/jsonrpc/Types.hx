/*
	This module contains basic JSON-RPC types.
 */
package jsonrpc;

/**
	A general message as defined by JSON-RPC.
**/
typedef Message = {
	/**
		JSON-RPC version (2.0).
	**/
	var jsonrpc:String;
}

typedef RequestId = haxe.extern.EitherType<Int, String>;

/**
	A request message to decribe a request between the client and the server.
	Every processed request must send a response back to the sender of the request.
**/
typedef RequestMessage = Message & {
	/**
		The request id.
	**/
	var id:RequestId;

	/**
		The method to be invoked.
	**/
	var method:String;

	/**
		The method's params.
	**/
	var ?params:Dynamic;
}

/**
	Response Message send as a result of a request. If a request doesn't provide a result value the receiver of a request still needs
	to return a response message to conform to the JSON RPC specification. The result property of the ResponseMessage should be set to
	`null` in this case to signal a successful request.
**/
typedef ResponseMessage = Message & {
	/**
		The request id.
	**/
	var id:Null<RequestId>;

	/**
		The result of a request. This can be omitted in the case of an error.
	**/
	var ?result:Dynamic;

	/**
		The error object in case a request fails.
	**/
	var ?error:ResponseErrorData;
}

/**
	Error object sent in the `ResponseMessage.error` field.
**/
typedef ResponseErrorData = {
	/**
		A number indicating the error type that occured.
	**/
	var code:Int;

	/**
		A string providing a short decription of the error.
	**/
	var message:String;

	/**
		A Primitive or Structured value that contains additional information about the error.
	**/
	var ?data:Dynamic;
}

/**
	A notification message. A processed notification message must not send a response back.
	They work like events.
**/
typedef NotificationMessage = Message & {
	/**
		The method to be invoked.
	**/
	var method:String;

	/**
		The notification's params.
	**/
	var ?params:Dynamic;
}

abstract RequestMethod<TParams, TResponse, TError, TRegistrationOptions>(String) to String {
	public inline function new(method:String)
		this = method;
}

abstract NotificationMethod<TParams, TRegistrationOptions>(String) to String {
	public inline function new(method:String)
		this = method;
}

enum NoData {}
