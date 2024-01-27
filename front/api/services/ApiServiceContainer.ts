import ApplicationService from "./ApplicationService";
import AuthenticationService from "./AuthenticationService";
import ProductsService from "./ProductsService";

export interface ApiServiceContainer {
    application: ApplicationService;
    authentication: AuthenticationService;
    callProducts:ProductsService;
}
