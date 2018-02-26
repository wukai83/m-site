export function configInitializer(init: Initializer) {
    return () => {
        init.load();
    };
}

import { ConfigService } from './service/config.service';
import { Injectable } from '@angular/core';
@Injectable()
export class Initializer {
    config: Object;

    constructor(private configService: ConfigService) {
    }

    load() {
        const uri = 'assets/config.json';
        this.configService.getConfig(uri).subscribe((data) => {
            this.config = data;
        });
    }
}
