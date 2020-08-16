function strip(x: number | string) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }

    return x.trim();
}

class MyResponse {
    header: 'response header';
    result: 'response result';
}

class MyError {
    header: 'error header';
    message: 'error message';
}

function handleResponse(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}

type AlertType = 'success' | 'warning' | 'danger';

function setAlertType(type: AlertType): void {
    //....
}

setAlertType('danger');
//setAlertType('default');//error
