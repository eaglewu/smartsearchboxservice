/**
 * Created by s_rya on 2/13/2017.
 */
'use strict';

//Config values for Watson Conversation Service running in Bluemix
const watsonCoversation = {
    url: 'https://gateway.watsonplatform.net/conversation/api',
    version_date: '2016-10-21',
    version: 'v1',
    workspaceId: 'b0b6e45c-f6a9-4acb-834e-593680bde9df',
    workspaceUserName: 'c715a3d3-4510-4fca-9a1e-73b29e018291',
    workspacePassword: 'gseiGfBJ5CNI'
};

//Config values for Watson Discovery Service running in Bluemix
const watsonDiscovery = {
    username: 'cce8943a-25a5-4cdf-bb87-053ed95b3214',
    password: 'y0oMfqx6vRo3',
    version: 'v1',
    version_date: '2016-12-01',
    environment_id: '36eee3d4-fa56-4712-85d7-a0e1b34e93c3',
    defaultCollection: 'customerDB-UK',
    collection_id: {
        'customerDB-UK': 'a4b412e5-194c-49bc-9055-926f11e0db37',
        'cars': '52e46aeb-3d4a-4d0d-8a5f-69485a3285da'
    }
};

//Config values for Cloudant Service
const cloudant = {
    username: "844d8c57-58b6-4391-8b52-50492bc81db2-bluemix",
    password: "acbb0d4c8c5a251db060d3890fc929afbb732c80ff7af948db5d4db512f327ea",
    dbName: 'cmdb'
};

module.exports = {
    watsonCoversation: watsonCoversation,
    watsonDiscovery: watsonDiscovery,
    cloudant: cloudant
};