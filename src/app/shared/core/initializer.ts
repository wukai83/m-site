export function configInitializer(init: Initializer) {
    return () => {
        init.load();
    };
}

import { Injectable } from '@angular/core';
import { ConfigService } from '../service/common/config.service';
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
