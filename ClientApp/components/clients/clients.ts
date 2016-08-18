import * as ng from '@angular/core';


@ng.Component({
  selector: 'clients',
  template: require('./clients.html')
})
export class Clients{
    public clients: Client[];
    constructor() { 
        this.clients = [1,2,3,4,5].map((id) => {
            let result = new Client();
            result.id = id;
            result.enabled = true;
            result.clientName = "Client_" + id;
            return result;
        });
        
    }
}

class Client{
    id: number;
    enabled: boolean;
    clientId: string;
    clientName: string;
    logoUri: string;
    refreshTokenExpiration: number;
    slidingRefreshTokenLifetime: number;
    authorizationCodeLifetime: number;

}