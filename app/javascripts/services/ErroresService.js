gatoEncerrado.service('erroresService', ['$alert', function($alert) {
    return {
        success: success,
        danger: danger,
        info: info
    };

    function success(content, title) {
        defaultAlert(content, title, 'success');
    }

    function danger(content, title){
        defaultAlert(content, title, 'danger');
    }

    function info(content, title){
        defaultAlert(content, title, 'info');
    }

    function defaultAlert(content, title, type) {
        $alert({
            title: title || '',
            content: content,
            type: type
        });
    }
}]);