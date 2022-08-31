from app.framework.injector import ContainerConfig, DependencyConfig, Scope
from app.services.userService import UserService
from app.services.authService import AuthService

def config_injector(config: ContainerConfig):
    config.bind(DependencyConfig(UserService, UserService, Scope.SINGLETON))
    config.bind(DependencyConfig(AuthService, AuthService, Scope.SINGLETON))