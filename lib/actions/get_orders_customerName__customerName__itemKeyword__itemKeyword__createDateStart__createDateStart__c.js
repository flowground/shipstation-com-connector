/**
 * Auto-generated action file for "ShipStation Developer Portal" API.
 *
 * Generated at: 2019-05-07T14:44:03.031Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / shipstation-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/orders?customerName={customerName}&itemKeyword={itemKeyword}&createDateStart={createDateStart}&createDateEnd={createDateEnd}&modifyDateStart={modifyDateStart}&modifyDateEnd={modifyDateEnd}&orderDateStart={orderDateStart}&orderDateEnd={orderDateEnd}&orderNumber={orderNumber}&orderStatus={orderStatus}&paymentDateStart={paymentDateStart}&paymentDateEnd={paymentDateEnd}&storeId={storeId}&sortBy={sortBy}&sortDir={sortDir}&page={page}&pageSize={pageSize}'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "customerName",
    "itemKeyword",
    "createDateStart",
    "createDateEnd",
    "modifyDateStart",
    "modifyDateEnd",
    "orderDateStart",
    "orderDateEnd",
    "orderNumber",
    "orderStatus",
    "paymentDateStart",
    "paymentDateEnd",
    "storeId",
    "sortBy",
    "sortDir",
    "page",
    "pageSize"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "customerName": "customerName",
    "itemKeyword": "itemKeyword",
    "createDateStart": "createDateStart",
    "createDateEnd": "createDateEnd",
    "modifyDateStart": "modifyDateStart",
    "modifyDateEnd": "modifyDateEnd",
    "orderDateStart": "orderDateStart",
    "orderDateEnd": "orderDateEnd",
    "orderNumber": "orderNumber",
    "orderStatus": "orderStatus",
    "paymentDateStart": "paymentDateStart",
    "paymentDateEnd": "paymentDateEnd",
    "storeId": "storeId",
    "sortBy": "sortBy",
    "sortDir": "sortDir",
    "page": "page",
    "pageSize": "pageSize"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/orders?customerName={customerName}&itemKeyword={itemKeyword}&createDateStart={createDateStart}&createDateEnd={createDateEnd}&modifyDateStart={modifyDateStart}&modifyDateEnd={modifyDateEnd}&orderDateStart={orderDateStart}&orderDateEnd={orderDateEnd}&orderNumber={orderNumber}&orderStatus={orderStatus}&paymentDateStart={paymentDateStart}&paymentDateEnd={paymentDateEnd}&storeId={storeId}&sortBy={sortBy}&sortDir={sortDir}&page={page}&pageSize={pageSize}',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}