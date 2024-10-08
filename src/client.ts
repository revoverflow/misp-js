import axios, { Axios } from 'axios';
import https from 'https';

import Events from './resources/events';
import Attributes from './resources/attributes';
import Users from './resources/users';
import Organisations from './resources/organisations';
import Servers from './resources/servers';
import Workers from './resources/workers';
import Feeds from './resources/feeds';
import Tags from './resources/tags';
import AnalystData from './resources/analyst-data';
import Logs from './resources/logs';
import AuthKeys from './resources/auth-keys';
import Sightings from './resources/sightings';
import Warninglists from './resources/warninglists';
import Noticelists from './resources/noticelists';
import Objects from './resources/objects';
import Taxonomies from './resources/taxonomies';
import GalaxyClusters from './resources/galaxy-clusters';
import Galaxies from './resources/galaxies';
import SharingGroups from './resources/sharing-groups';
import UserSettings from './resources/user-settings';
import EventReports from './resources/event-reports';

export class Client {

    private readonly client: Axios;

    public readonly events: Events = new Events(this);
    public readonly objects: Objects = new Objects(this);
    public readonly attributes: Attributes = new Attributes(this);
    public readonly users: Users = new Users(this);
    public readonly organisations: Organisations = new Organisations(this);
    public readonly servers: Servers = new Servers(this);
    public readonly workers: Workers = new Workers(this);
    public readonly feeds: Feeds = new Feeds(this);
    public readonly tags: Tags = new Tags(this);
    public readonly analystData: AnalystData = new AnalystData(this);
    public readonly logs: Logs = new Logs(this);
    public readonly authKeys: AuthKeys = new AuthKeys(this);
    public readonly sightings: Sightings = new Sightings(this);
    public readonly warninglists: Warninglists = new Warninglists(this);
    public readonly noticelists: Noticelists = new Noticelists(this);
    public readonly taxonomies: Taxonomies = new Taxonomies(this);
    public readonly galaxies: Galaxies = new Galaxies(this);
    public readonly galaxyClusters: GalaxyClusters = new GalaxyClusters(this);
    public readonly sharingGroups: SharingGroups = new SharingGroups(this);
    public readonly userSettings: UserSettings = new UserSettings(this);
    public readonly eventReports: EventReports = new EventReports(this);
    
    constructor(
        private readonly instanceUrl: string,
        private readonly apiKey: string,
        private readonly httpsAgent: https.Agent = new https.Agent({ rejectUnauthorized: false })
    ) {
        this.instanceUrl = instanceUrl;
        this.apiKey = apiKey;

        this.client = axios.create({
            baseURL: this.instanceUrl,
            httpsAgent: this.httpsAgent,
            headers: {
                'Authorization': `${this.apiKey}`,
                'Accept': 'application/json'
            }
        });
    }

    async get(path: string) {
        const response = await this.client.get(path);
        return response.data;
    }

    async post(path: string, data: any = {}) {
        const response = await this.client.post(path, data);
        return response.data;
    }

    async delete(path: string) {
        const response = await this.client.delete(path);
        return response.data;
    }

    async put(path: string, data: any) {
        const response = await this.client.put(path, data);
        return response.data;
    }

}