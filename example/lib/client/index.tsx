import { hydrate, setup } from "otion";
import "../injects";
import { inject } from "sosse/preact";

setup({});
hydrate();
inject({ logInjects: true });
