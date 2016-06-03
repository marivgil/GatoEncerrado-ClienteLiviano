gatoEncerrado.controller("LoginController", function ($state, $scope) {
    
    var self = this;
    self.user = {
        name : "Ingresar"
    };

    $scope.ingresar = function() {
        $state.go("homeDer");
    }

});


