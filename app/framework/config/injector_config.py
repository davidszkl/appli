from app.framework.injector import ContainerConfig, DependencyConfig, Scope
from app.services.userService import UserService

def config_injector(config: ContainerConfig):
    config.bind(DependencyConfig(UserService, UserService, Scope.SINGLETON))