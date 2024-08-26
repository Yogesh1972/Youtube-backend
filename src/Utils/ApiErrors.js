class ApiErrors extends Error {
     constructor(statusCode,
        message="Something went wrong",
        error=[],
        stack=""
    ){
        super(message);
        this.statusCode=statusCode;
        this.data=null;     //data is null as error is there because data is only there when success is there
        this.message=message;
        this.success=false;  //as only error is there
        this.error=error;

        if(stack){
            this.stack=stack;
        }else{
            Error.captureStackTrace(this,this.constructor);  //this will capture the stack trace
        }
     }
}


export default ApiErrors;