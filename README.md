# ![LOGO](logo.png) ShipStation Developer Portal **flow**ground Connector

## Description

A generated **flow**ground connector for the ShipStation Developer Portal API (version 1.0.0).

Generated from: https://api.apis.guru/v2/specs/shipstation.com/1.0.0/swagger.json<br/>
Generated at: 2019-05-07T17:44:03+03:00

## API Description

# Integrating with ShipStation

ShipStation strives to streamline shipping for online sellers, no matter where they sell their products online. We are continuously adding new marketplaces, shopping carts, and integration tools, because we know the e-commerce space is growing. 
As a result, we’ve worked hard to provide developer resources to build custom integrations with ShipStation.  If you’re interested in becoming a partner of ours, drop us a line by [filling out this form](http://www.shipstation.com/partners/shipstation-api-custom-store/) and we’ll get in touch.

There are two methods to integrate with ShipStation:

* Custom Store Integration

* ShipStation API

## Custom Store Integration

Looking for a more 1-to-1 relationship between ShipStation and your chosen selling platform? The Custom Store Integration is the ticket. Our custom store integration is just like any of our other selling channel integration, and could be eligible (based on internal review) as a branded option within the ShipStation admin. It also allows the user to sync orders within ShipStation in a single click, in addition to ShipStation automatically sending shipment status and tracking information 
updates back to your cart or marketplace once a label is created. It’s the best way to sync up orders with ShipStation and have the most seamless experience.

The Custom Store allows you to perform two major functions:

* Provide order information to ShipStation, including recipient address, products, customers, etc.

* Receive tracking information when an order is shipped, including shipping method, shipping status, tracking number, and more

To integrate with the Custom Store, you must expose a web page that renders XML that adheres to the specification defined in the Custom Store Integration Guide. 
We refer to this page as your “XML Endpoint”. If you can provide us an XML Endpoint, we can *pull* data from your endpoint just like we do with other marketplaces like eBay and Amazon.

**To find out more about our Custom Store Integration, click here: [Custom Store Integration Guide](https://help.shipstation.com/hc/en-us/articles/205928478)**

## ShipStation API

Our API is available for any plan, and allows for read access to almost all data in your account, and write access to create specific objects, like Orders, Customers, and Products. 
The API is a great way to get data directly to and from ShipStation, like creating products, customers, and querying order & shipping data. Please note that an API integration will not allow you to use your own MarketplaceID that could eventually be branded with your company's logo (see the Custom Store Integration above for that functionality).

**This API allows developers to build applications that interface with the ShipStation platform. The API can be used to automate many tasks including:**

+ Managing Orders

+ Managing Shipments

+ Creating Shipping Labels

+ Retrieving Shipping Rates

+ and more!!!

**To learn more about our API, please review our API documentation below.**

## Which one should I pick?

The method that's right for your integration very much depends on the type of integration you're planning on implementing. A Custom Store allows ShipStation to *pull* order information from your platform the very same way we *pull* data from marketplaces such as eBay, Amazon, and Shopify. Once an order has been shipped in ShipStation, ShipStation automatically *pushes* tracking information back to your custom store. Though the functionality afforded by this approach is limited to these 2 main functions, much of the *heavy lifting* is performed by ShipStation. Importing orders 
and sending tracking information is performed automatically by ShipStation, as long as your XML endpoint is available to receive our data.

An API integration, on the other hand, exposes much more functionality, but requires that the developer do much of the heavy lifting. Orders must be *pushed* to ShipStation by using our "/orders/CreateOrder" endpoint.  The API allows developers to perform functions such as tagging an order, 
shipping an order, creating a shipping label (without an order), retrieving shipping rates, adding funds to a carrier account, creating a warehouse, listing products, and much more.  The functionality the API affords are typical actions that a user would perform if using the web app.

### Considerations

* **Will your integration be the main order management tool for the online seller?**  If so, the API's broader range of functionality may be the best option.

* **Would you like your store integration to be a branded marketplace within the ShipStation admin?** When you integrate using the Custom Store Integration, you could be eligible to have your company branded within the ShipStation admin. A branded store could have the plugin's logo in the app,
as well as an easier store setup, order sync, and reporting. Please note, ShipStation makes the final decision, based on integration and partner requirements, on which custom stores are branded within our application.

# ShipStation API Requirements

## End Point

Endpoints are located at the following domain https://ssapi.shipstation.com/ and will need to have a specific reference added to return data. PLEASE NOTE: You cannot access this URL directly and must reference one of the specific endpoints below.

## Authentication

The ShipStation API uses [Basic HTTP authentication](http://en.wikipedia.org/wiki/Basic_access_authentication). Use your ShipStation ``API Key`` as the username and ``API Secret`` as the password.  You can find your ``API Key`` as the username and ``API Secret`` under Settings at https://ss.shipstation.com/#/settings/api .

The Authorization header is constructed as follows:

+ Username (``API KEY``) and password (``API Secret``) are combined into a string "username:password"

+ The resulting string is then encoded using the RFC2045-MIME variant of Base64, except not limited to 76 char/line

+ The authorization method and a space i.e. "Basic " is then put before the encoded string.

For example, if the ``API KEY`` given is 'ShipStation' and the ``API Secret`` is 'Rocks' then the header is formed as follows:

+ Authorization: Basic U2hpcFN0YXRpb246Um9ja3M=

## API Rate Limits

In an effort to ensure consistent application performance and increased scalability, we have implemented rate limiting on the ShipStation API.  Your integration will need to be able to handle HTTP rate limiting status messages as defined below:

**Response Headers**

All responses will include headers with status information about rate limiting.

1. X-Rate-Limit-Limit: the maximum number of requests per minute to the endpoint

2. X-Rate-Limit-Remaining: the available requests remaining in the current window

3. X-Rate-Limit-Reset: the number of seconds remaining until the next window begins

**Hitting the Limit**

If your application hits the rate limit, an HTTP 429 will be returned with this body:

```
{
    "message": "Too Many Requests"
}
```

And these headers, assuming it is 40 seconds into the current window:

```
{
    "X-Rate-Limit-Limit": 60,
    "X-Rate-Limit-Remaining": 0,
    "X-Rate-Limit-Reset": 20
}
```

When the limit is reached, your application should stop making requests until X-Rate-Limit-Reset seconds have elapsed. The current Rate limit for each set of the API Key and Secret is 40 requests per minute.

If you have any issues with the API, please email us at <apisupport@shipstation.com>

## Server Responses

Status Code | Description
------------|-------------
``200`` | OK - The request was successful (some API calls may return 201 instead).
``201`` | Created - The request was successful and a resource was created.
``204`` | No Content - The request was successful but there is no representation to return (that is, the response is empty).
``400`` | Bad Request -  The request could not be understood or was missing required parameters.
``401`` | Unauthorized -  Authentication failed or user does not have permissions for the requested operation.
``403`` | Forbidden - Access denied.
``404`` | Not Found -  Resource was not found.
``405`` | Method Not Allowed -  Requested method is not supported for the specified resource.
``429`` | Too Many Requests - Exceeded ShipStation API limits. When the limit is reached, your application should stop making requests until X-Rate-Limit-Reset seconds have elapsed.
``500`` | Internal Server Error - ShipStation has encountered an error.

## DateTime Format and Time Zone

ShipStation uses the ISO 8601 combined format for dateTime stamps being submitted to and returned from the API. Please be sure to submit all dateTime values as follows:

yyyy-mm-dd hh:mm:ss (24 hour notation). Example - ``2016-11-29 23:59:59``

The time zone represented in all API responses is PST/PDT. Similarly, ShipStation asks that you make all time zone convertions and submit any dateTime requests in PST/PDT.

## Authorization

This API does not require authorization.

## Actions

### List Tags

> Lists all tags defined for this account.

*Tags:* `Accounts`

### Register Account

> Creates a new ShipStation account and generates an apiKey and apiSecret to be used by the newly created account. PLEASE NOTE: This endpoint does not require API key and API Secret credentials.  The Authorization header can be left off. Use of this specific endpoint requires approval, and is meant only for direct partners of ShipStation. This is the only endpoint to require approval. All other endpoints listed in this document can be accessed by submitting proper authorization credentials in the header of the request. To become a direct partner of ShipStation, or to request more information on becoming a direct partner, we recommend reaching out to our Partners and Integrations team here: https://info.shipstation.com/become-a-partner-api-and-custom-store-integrations<br/>
> <br/>
> The body of this request has the following attributes:<br/>
> <br/>
> Name               |Data Type          |Description<br/>
> -------------------|-------------------|-------------------<br/>
> ``firstName``  | string, required | First Name<br/>
> ``lastName`` | string, required | Last Name<br/>
> ``email`` | string, required | Email address. This will also be the username of the account.<br/>
> ``password`` | string, required | Password to set for account access.<br/>
> ``companyName`` | string, optional | Name of Company.<br/>
> ``addr1`` | string, optional | Company Address - Street 1<br/>
> ``addr2`` | string, optional | Company Address - Street 2<br/>
> ``city`` | string, optional | Company Address - City<br/>
> ``state`` | string, optional | Company Address - State <br/>
> ``zip`` | string, optional | Company Address - Zip Code<br/>
> ``countryCode`` |string, optional | Company Address - Country.  Please use a 2-character country code.<br/>
> ``phone`` | string, optional | Company Phone number.

*Tags:* `Accounts`

### List Carriers

> Lists all shipping providers connected to this account.

*Tags:* `Carriers`

### Add Funds

> Adds funds to a carrier account using the payment information on file. The body of this request should specify the following attributes:<br/>
> <br/>
> Name               |Data Type          |Description<br/>
> -------------------|-------------------|-------------------<br/>
>  ``carrierCode`` | string, required |  The carrier to add funds to.<br/>
>  ``amount`` | number, required | The dollar amount to add to the account.  The minimum value that can be added is $10.00.  The maximum value is $10,000.00.

*Tags:* `Carriers`

### Get Carrier

> Retrieves the shipping carrier account details for the specified carrierCode. Use this method to determine a carrier's account balance.

*Tags:* `Carriers`

#### Input Parameters
* `carrierCode` - _required_ - The code for the carrier account to retrieve.

### List Packages

> Retrieves a list of packages for the specified carrier

*Tags:* `Carriers`

#### Input Parameters
* `carrierCode` - _required_ - The carrier's code

### List Services

> Retrieves the list of available shipping services provided by the specified carrier

*Tags:* `Carriers`

#### Input Parameters
* `carrierCode` - _required_ - The carrier's code

### Get Customer

*Tags:* `Customers`

#### Input Parameters
* `customerId` - _required_ - The system generated identifier for the Customer.

### List Customers

> Obtains a list of customers that match the specified criteria.

*Tags:* `Customers`

#### Input Parameters
* `stateCode` - _required_ - Returns customers that reside in the specified stateCode.
* `countryCode` - _required_ - Returns customers that reside in the specified countryCode.
* `marketplaceId` - _required_ - Returns customers that purchased items from the specified marketplaceId.
* `tagId` - _required_ - Returns customers that have been tagged with the specified tagId.
* `sortBy` - _required_ - Sorts the order of the response based off the specified value.
    Possible values: Name, ModifyDate, CreateDate.
* `sortDir` - _required_ - Sets the direction of the sort order.
    Possible values: ASC, DESC.
* `page` - _required_ - Page number.
* `pageSize` - _required_ - Requested page size. Max value is 500.

### List Fulfillments w/o parameters

*Tags:* `Fulfillments`

### List Fulfillments with parameters

> Obtains a list of fulfillments that match the specified criteria.  Please note the following:<br/>
> <br/>
> - Orders that have been marked as shipped either through the UI or the API will appear in the response as they are considered fulfillments.<br/>
> <br/>
> All of the available filters are optional.  They do not need to be included in the URL.  If you do include them, here's what the URL may look like:<br/>
> <br/>
> Url format with filters:<br/>
> <br/>
> ```<br/>
> fulfillments?fulfillmentId={fulfillmentId}<br/>
> &orderId={orderId}<br/>
> &orderNumber={orderNumber}<br/>
> &trackingNumber={trackingNumber}<br/>
> &recipientName={recipientName}<br/>
> &createDateStart={createDateStart}<br/>
> &createDateEnd={createDateEnd}<br/>
> &shipDateStart={shipDateStart}<br/>
> &shipDateEnd={shipDateEnd}<br/>
> &sortBy={sortBy}<br/>
> &sortDir={sortDir}<br/>
> &page={page}<br/>
> &pageSize={pageSize}<br/>
> ```

*Tags:* `Fulfillments`

#### Input Parameters
* `fulfillmentId` - _required_ - Returns the fulfillment with the specified fulfillment ID.
* `orderId` - _required_ - Returns fulfillments whose orders have the specified order ID.
* `orderNumber` - _required_ - Returns fulfillments whose orders have the specified order number.
* `trackingNumber` - _required_ - Returns fulfillments with the specified tracking number.
* `recipientName` - _required_ - Returns fulfillments shipped to the specified recipient name.
* `createDateStart` - _required_ - Returns fulfillments created on or after the specified ``createDate``
* `createDateEnd` - _required_ - Returns fulfillments created on or before the specified ``createDate``
* `shipDateStart` - _required_ - Returns fulfillments with the ``shipDate`` on or after the specified date
* `shipDateEnd` - _required_ - Returns fulfillments with the ``shipDate`` on or before the specified date
* `sortBy` - _required_ - Sort the responses by a set value.  The response will be sorted based off the ascending dates (oldest to most current.)  If left empty, the response will be sorted by ascending ``createDate``.
    Possible values: ShipDate, CreateDate.
* `sortDir` - _required_ - Sets the direction of the sort order.
    Possible values: ASC, DESC.
* `page` - _required_ - page number.
* `pageSize` - _required_ - page size.

### List Orders w/o parameters

*Tags:* `Orders`

### Add Tag to Order

> Adds a tag to an order.  The body of this request should specify the following attributes:<br/>
> <br/>
> Name               |Data Type          |Description<br/>
> -------------------|-------------------|-------------------<br/>
> ``orderId`` | number, required | Identifies the order that will be tagged.<br/>
> ``tagId`` | number, required | Identifies the tag that will be applied to the order.

*Tags:* `Orders`

### Assign User to Order

> Assigns a user to an order.  The body of this request should specify the following attributes:<br/>
> <br/>
> Name               |Data Type          |Description<br/>
> -------------------|-------------------|-------------------<br/>
> ``orderIds`` | number, required | Identifies set of orders that will be assigned the user.  Please note that if ANY of the orders within the array are not found, no orders will have a user assigned to them.<br/>
> ``userId`` | number, required | Identifies the user that will be applied to the orders.  It should contain a GUID of the user to be assigned to the array of orders.

*Tags:* `Orders`

### Create Label for Order

> Creates a shipping label for a given order.  The ``labelData`` field returned in the response is a base64 encoded PDF value. Simply decode and save the output as a PDF file to retrieve a printable label.  The body of this request should specify the following attributes:<br/>
> <br/>
> Name               |Data Type          |Description<br/>
> -------------------|-------------------|-------------------<br/>
> ``orderId`` | number, required | Identifies the order that will be shipped.<br/>
> ``carrierCode`` | string, required | The code for the carrier that is to be used for the label.<br/>
> ``serviceCode`` | string, required | The code for the shipping service that is to be used for the label.<br/>
> ``confirmation`` | string, required | The type of delivery confirmation that is to be used once the shipment is created.  Possible values: ``none``, ``delivery``, ``signature``, ``adult_signature``, and ``direct_signature``.  ``direct_signature`` is available for FedEx only.<br/>
> ``shipDate`` | string, required | The date the order should be shipped.<br/>
> ``weight`` | Weight, optional | Weight of the order.  Use the [**Weight**](http://www.shipstation.com/developer-api/#/reference/model-weight) model.<br/>
> ``dimensions`` | Dimensions, optional | Dimensions of the order.  Use [**Dimensions**](http://www.shipstation.com/developer-api/#/reference/model-dimensions) model.<br/>
> ``insuranceOptions`` | InsuranceOptions, optional | The shipping insurance information associated with this label.  Use the [**InsuranceOptions**](http://www.shipstation.com/developer-api/#/reference/model-insuranceoptions) model.<br/>
> ``internationalOptions`` | InternationalOptions, optional | Customs information that can be used to generate customs documents for international orders.  Use the [**InternationalOptions**](http://www.shipstation.com/developer-api/#/reference/model-internationaloptions) model.<br/>
> ``advancedOptions`` | AdvancedOptions, optional | Various advanced options that may be available depending on the shipping carrier that is used to ship the order. Use the Customs information that can be used to generate customs documents for international orders.  Use the [**AdvancedOptions**](http://www.shipstation.com/developer-api/#/reference/model-advancedoptions) model.<br/>
> ``testLabel`` | boolean, required | Specifies whether a test label should be created.

*Tags:* `Orders`

### Create/Update Order

> If the ``orderKey`` is specified, the method becomes idempotent and the existing order with that key will be updated. Note: Only orders in an open status in ShipStation (``awaiting_payment``,``awaiting_shipment``, and ``on_hold``) can be updated through this method. ``cancelled`` and ``shipped`` are locked from modification through the API.  The body of this request should specify an [**Order**](https://www.shipstation.com/developer-api/#/reference/model-order) object:<br/>
> <br/>
> Name               |Data Type          |Description<br/>
> -------------------|-------------------|-------------------<br/>
> ``orderNumber`` | string, required | A user-defined order number used to identify an order.<br/>
> ``orderKey`` | string, optional | A user-provided key that should be unique to each order.  If an orderKey is not provided, ShipStation will create a new order and generate a unique orderKey for that order.  If the orderKey *is* provided, the **createorder** method will either: create a new order if the provided orderKey is not found, or, update the existing order if the orderKey is found.<br/>
> ``orderDate`` | string, required | The date the order was placed.<br/>
> ``paymentDate`` | string, optional | The date the order was paid for.<br/>
> ``shipByDate`` | string, optional | The date the order is to be shipped before or on. This field is a suggested value generated by the order source/platform/cart and passed to ShipStation.<br/>
> ``orderStatus`` | string, required | The order's status. Possible values: ``awaiting_payment``, ``awaiting_shipment``, ``shipped``, ``on_hold``, ``cancelled``<br/>
> ``customerUsername`` | string, optional | The customer's username.<br/>
> ``customerEmail`` | string, optional | The customer's email address.<br/>
> ``billTo`` | Address, required | The recipients billing address. Use the [**Address**](https://www.shipstation.com/developer-api/#/reference/model-address) model.<br/>
> ``shipTo`` | Address, required | The recipient's shipping address. Use the [**Address**](http://www.shipstation.com/developer-api/#/reference/model-address) model.<br/>
> ``items`` | OrderItem, optional | An array of item objects.  Use an array of [**OrderItem**](http://www.shipstation.com/developer-api/#/reference/model-orderitem) models.<br/>
> ``amountPaid`` | number, optional | The total amount paid for the Order.<br/>
> ``taxAmount`` | number, optional | The total tax amount for the Order.<br/>
> ``shippingAmount`` | number, optional | Shipping amount paid by the customer, if any.<br/>
> ``customerNotes`` | string, optional | Notes left by the customer when placing the order.<br/>
> ``internalNotes`` | string, optional | Private notes that are only visible to the seller.<br/>
> ``gift`` | boolean, optional | Specifies whether or not this Order is a gift<br/>
> ``giftMessage`` | string, optional | Gift message left by the customer when placing the order.<br/>
> ``paymentMethod`` | string, optional | Method of payment used by the customer.<br/>
> ``requestedShippingService`` | string, optional |Identifies the shipping service selected by the customer when placing this order. This value is given to ShipStation by the marketplace/cart and helps identify what shipping service the customer selected upon checkout.<br/>
> ``carrierCode`` | string, optional | The code for the carrier that is to be used(or was used) when this order is shipped(was shipped).<br/>
> ``serviceCode`` | string, optional | The code for the shipping service that is to be used(or was used) when this order is shipped(was shipped).<br/>
> ``packageCode`` | string, optional | The code for the package type that is to be used(or was used) when this order is shipped(was shipped).<br/>
> ``confirmation`` | string, optional | The type of delivery confirmation that is to be used(or was used) when this order is shipped(was shipped). Possible values: ``none``, ``delivery``, ``signature``, ``adult_signature``, and ``direct_signature``.  ``direct_signature`` is available for FedEx only.  <br/>
> ``shipDate`` | string, optional | The date the order was shipped.<br/>
> ``weight`` | Weight, optional | Weight of the order.  Use the [**Weight**](http://www.shipstation.com/developer-api/#/reference/model-weight) model.<br/>
> ``dimensions`` | Dimensions, optional | Dimensions of the order.  Use the [**Dimensions**](http://www.shipstation.com/developer-api/#/reference/model-dimensions) model.<br/>
> ``insuranceOptions`` | InsuranceOptions, optional | The shipping insurance information associated with this order.  Use the [**InsuranceOptions**](http://www.shipstation.com/developer-api/#/reference/model-insuranceoptions) model.<br/>
> ``internationalOptions`` | InternationalOptions, optional | Customs information that can be used to generate customs documents for international orders.  Use the [**InternationalOptions**](http://www.shipstation.com/developer-api/#/reference/model-internationaloptions) model.<br/>
> ``advancedOptions`` | AdvancedOptions, optional | Various advanced options that may be available depending on the shipping carrier that is used to ship the order. Use the [**AdvancedOptions**](http://www.shipstation.com/developer-api/#/reference/model-advancedoptions) model.<br/>
> ``tagIds``|number[]|Array of tagIds.  Each tagId identifies a tag that has been associated with this order.

*Tags:* `Orders`

### Create/Update Multiple Orders

> This endpoint can be used to create or update multiple orders in one request. If the ``orderKey`` is specified in an order, the existing order with that key will be updated. Note: Only orders in an open status in ShipStation (``awaiting_payment``,``awaiting_shipment``, and ``on_hold``) can be updated through this method. ``cancelled`` and ``shipped`` are locked from modification through the API.<br/>
> <br/>
> Data Type          |Description<br/>
> -------------------|-------------------<br/>
> Order, required | An array of [**Order**](http://www.shipstation.com/developer-api/#/reference/model-order) objects (maximum of 100 per request)

*Tags:* `Orders`

### Hold Order Until

> This method will change the status of the given order to On Hold until the date specified, when the status will automatically change to Awaiting Shipment.<br/>
> <br/>
> The body of this request should specify the following attributes:<br/>
> <br/>
> Name               |Data Type          |Description<br/>
> -------------------|-------------------|-------------------<br/>
> ``orderId`` | number, required | Identifies the order that will be held.<br/>
> ``holdUntilDate`` | string, required | Date when order is moved from ``on_hold`` status to ``awaiting_shipment``.

*Tags:* `Orders`

### List Orders by Tag

> Lists all orders that match the specified status and tag ID.<br/>
> <br/>
> Url format with filters:<br/>
> <br/>
> ```<br/>
> /listbytag?orderStatus={orderStatus}<br/>
> &tagId={tagId}<br/>
> &page={page}<br/>
> &pageSize={pageSize}<br/>
> ```

*Tags:* `Orders`

#### Input Parameters
* `orderStatus` - _required_ - The order's status.
    Possible values: awaiting_payment, awaiting_shipment, pending_fulfillment, shipped, on_hold, cancelled.
* `tagId` - _required_ - ID of the tag. Call Accounts/ListTags to obtain a list of tags for this account.
* `page` - _required_ - Page number
* `pageSize` - _required_ - Requested page size. Max value is 500.

### Mark an Order as Shipped

> Marks an order as shipped without creating a label in ShipStation. The body of this request has the following attributes:<br/>
> <br/>
> Name               |Data Type          |Description<br/>
> -------------------|-------------------|-------------------<br/>
>  ``orderId`` | number, required | Identifies the order that will be marked as shipped.<br/>
>  ``carrierCode`` | string, required | Code of the carrier that is marked as having shipped the order.<br/>
>  ``shipDate`` | string, optional | Date order was shipped.<br/>
>  ``trackingNumber`` | string, optional | Tracking number of shipment.<br/>
>  ``notifyCustomer``  | boolean, optional | Specifies whether the customer should be notified of the shipment. Default value: false<br/>
>  ``notifySalesChannel`` | boolean, optional | Specifies whether the sales channel should be notified of the shipment. Default value: false

*Tags:* `Orders`

### Remove Tag from Order

> Removes a tag from the specified order.  The body of this request has the following attributes:<br/>
> <br/>
> Name               |Data Type          |Description<br/>
> -------------------|-------------------|-------------------<br/>
> ``orderId`` | number, required | Identifies the order whose tag will be removed.<br/>
> ``tagId`` | number, required | Identifies the tag to remove.

*Tags:* `Orders`

### Restore Order from On Hold

> This method will change the status of the given order from On Hold to Awaiting Shipment. This endpoint is used when a holdUntil Date is attached to an order.<br/>
> <br/>
> The body of this request should specify the following attributes:<br/>
> <br/>
> Name               |Data Type          |Description<br/>
> -------------------|-------------------|-------------------<br/>
> ``orderId`` | number, required | Identifies the order that will be restored to ``awaiting_shipment`` from ``on_hold``.

*Tags:* `Orders`

### Unassign User from Order

> Unassigns a user from an order.  The body of this request should specify the following attributes:<br/>
> <br/>
> Name               |Data Type          |Description<br/>
> -------------------|-------------------|-------------------<br/>
> ``orderIds`` | number, required | Identifies set of orders that will have the user unassigned.  Please note that if ANY of the orders within the array are not found, then no orders will have their users unassigned.

*Tags:* `Orders`

### Delete Order

> Removes order from ShipStation's UI. Note this is a "soft" delete action so the order will still exist in the database, but will be set to ``inactive``

*Tags:* `Orders`

#### Input Parameters
* `orderId` - _required_ - The system generated identifier for the order.

### Get Order

> Retrieves a single order from the database.

*Tags:* `Orders`

#### Input Parameters
* `orderId` - _required_ - The system generated identifier for the order.

### List Orders with parameters

> Obtains a list of orders that match the specified criteria.  All of the available filters are optional.  They do not need to be included in the URL.  If you do include them, here's what the URL may look like:<br/>
> <br/>
> Url format with filters:<br/>
> <br/>
> ```<br/>
> /orders?customerName={customerName}<br/>
> &itemKeyword={itemKeyword}<br/>
> &createDateStart={createDateStart}<br/>
> &createDateEnd={createDateEnd}<br/>
> &modifyDateStart={modifyDateStart}<br/>
> &modifyDateEnd={modifyDateEnd}<br/>
> &orderDateStart={orderDateStart}<br/>
> &orderDateEnd={orderDateEnd}<br/>
> &orderNumber={orderNumber}<br/>
> &orderStatus={orderStatus}<br/>
> &paymentDateStart={paymentDateStart}<br/>
> &paymentDateEnd={paymentDateEnd}<br/>
> &storeId={storeId}<br/>
> &sortBy={sortBy}<br/>
> &sortDir={sortDir}<br/>
> &page={page}<br/>
> &pageSize={pageSize}<br/>
> ```

*Tags:* `Orders`

#### Input Parameters
* `customerName` - _required_ - Returns orders that match the specified name.
* `itemKeyword` - _required_ - Returns orders that contain items that match the specified keyword. Fields searched are Sku, Description, and Options
* `createDateStart` - _required_ - Returns orders that were created in ShipStation after the specified date
* `createDateEnd` - _required_ - Returns orders that were created in ShipStation before the specified date
* `modifyDateStart` - _required_ - Returns orders that were modified after the specified date
* `modifyDateEnd` - _required_ - Returns orders that were modified before the specified date
* `orderDateStart` - _required_ - Returns orders greater than the specified date
* `orderDateEnd` - _required_ - Returns orders less than or equal to the specified date
* `orderNumber` - _required_ - Filter by order number, performs a "starts with" search.
* `orderStatus` - _required_ - Filter by order status.  If left empty, orders of all statuses are returned.
    Possible values: awaiting_payment, awaiting_shipment, pending_fulfillment, shipped, on_hold, cancelled.
* `paymentDateStart` - _required_ - Returns orders that were paid after the specified date
* `paymentDateEnd` - _required_ - Returns orders that were paid before the specified date
* `storeId` - _required_ - Filters orders to a single store. Call List Stores to obtain a list of store Ids.
* `sortBy` - _required_ - Sort the responses by a set value.  The response will be sorted based off the ascending dates (oldest to most current.)  If left empty, the response will be sorted by ascending ``orderId``.
    Possible values: OrderDate, ModifyDate, CreateDate.
* `sortDir` - _required_ - Sets the direction of the sort order.
    Possible values: ASC, DESC.
* `page` - _required_ - Page number
* `pageSize` - _required_ - Requested page size. Max value is 500.

### List Products w/o parameters

*Tags:* `Products`

### Get Product

*Tags:* `Products`

#### Input Parameters
* `productId` - _required_ - The system generated identifier for the Product.

### Update Product

> Updates an existing product. This call does not currently support partial updates. The entire resource must be provided in the body of the request.

*Tags:* `Products`

#### Input Parameters
* `productId` - _required_ - The system generated identifier for the Product.

### List Products with parameters

> Obtains a list of products that match the specified criteria.  All of the available filters are optional.  They do not need to be included in the URL.  If you do include them, here's what the URL may look like:<br/>
> <br/>
> Url format with filters:<br/>
> <br/>
> ```<br/>
> /products?sku={sku}<br/>
> &name={name}<br/>
> &productCategoryId={productCategoryId}<br/>
> &productTypeId={productTypeId}<br/>
> &tagId={tagId}<br/>
> &startDate={startDate}<br/>
> &endDate={endDate}<br/>
> &showInactive={showInactive}<br/>
> &sortBy={sortBy}<br/>
> &sortDir={sortDir}<br/>
> &page={page}<br/>
> &pageSize={pageSize}<br/>
> ```

*Tags:* `Products`

#### Input Parameters
* `sku` - _required_ - Returns products that match the specified SKU.
* `name` - _required_ - Returns products that match the specified product name.
* `productCategoryId` - _required_ - Returns products that match the specified productCategoryId.
* `productTypeId` - _required_ - Returns products that match the specified productTypeId.
* `tagId` - _required_ - Returns products that match the specified tagId.
* `startDate` - _required_ - Returns products that were created after the specified date.
* `endDate` - _required_ - Returns products that were created before the specified date.
* `sortBy` - _required_ - Sorts the order of the response based off the specified value.
    Possible values: SKU, ModifyDate, CreateDate.
* `sortDir` - _required_ - Sets the direction of the sort order.
    Possible values: ASC, DESC.
* `page` - _required_ - Page number.
* `pageSize` - _required_ - Requested page size. Max value is 500.
* `showInactive` - _required_ - Specifies whether the list should include inactive products.

### List Shipments w/o parameters

*Tags:* `Shipments`

### Create Shipment Label

> Creates a shipping label.  The ``labelData`` field returned in the response is a base64 encoded PDF value. Simply decode and save the output as a PDF file to retrieve a printable label.  The body of this request has the following attributes:<br/>
> <br/>
> Name               |Data Type          |Description<br/>
> -------------------|-------------------|-------------------<br/>
>  ``carrierCode`` | string, required | Identifies the carrier to be used for this label.<br/>
>  ``serviceCode`` | string, required | Identifies the shipping service to be used for this label.<br/>
>  ``packageCode`` | string, required | Identifies the packing type that should be used for this label.<br/>
>  ``confirmation`` | string, optional | The type of delivery confirmation that is to be used once the shipment is created.  Possible values: ``none``, ``delivery``, ``signature``, ``adult_signature``, and ``direct_signature``.  ``direct_signature`` is available for FedEx only.<br/>
>  ``shipDate`` | string, required | The date the shipment will be shipped.<br/>
>  ``weight`` | Weight, required | Shipment's weight.  Use the [**Weight**](https://www.shipstation.com/developer-api/#/reference/model-weight) model.<br/>
>  ``dimensions`` | Dimensions, optional | Shipment's dimensions.  Use the [**Dimensions**](https://www.shipstation.com/developer-api/#/reference/model-dimensions) model.<br/>
>  ``shipFrom`` | Address, required | Address indicating shipment's origin.  Use the [**Address**](https://www.shipstation.com/developer-api/#/reference/model-address) model.<br/>
>  ``shipTo`` | Address, required | Address indicating shipment's destination.  Use the [**Address**](https://www.shipstation.com/developer-api/#/reference/model-address) model.<br/>
>  ``returnTo`` | Address, optional | Address indicating return address displayed on the label.  Use the [**Address**](https://www.shipstation.com/developer-api/#/reference/model-address) model.<br/>
>  ``insuranceOptions`` | InsuranceOptions, optional | The shipping insurance information associated with this order.  <br/>
>  ``internationalOptions`` | InternationalOptions, optional | Customs information that can be used to generate customs documents for international orders.  Use the [**InternationalOptions**](https://www.shipstation.com/developer-api/#/reference/model-internationaloptions) model.<br/>
>  ``advancedOptions`` | AdvancedOptions, optional | Various advanced options that may be available depending on the shipping carrier that is used to ship the order.  Use the [**AdvancedOptions**](https://www.shipstation.com/developer-api/#/reference/model-advancedoptions) model. <br/>
>  ``testLabel`` | boolean, optional | Specifies whether a test label should be created. Default value: false.

*Tags:* `Shipments`

### Get Rates

> Retrieves shipping rates for the specified shipping details.  The body of this request should specify the following attributes:<br/>
> <br/>
> Name               |Data Type          |Description<br/>
> -------------------|-------------------|-------------------<br/>
>  ``carrierCode`` | string, required | Returns rates for the specified carrier.<br/>
>  ``serviceCode`` | string, optional | Returns rates for the specified shipping service.<br/>
>  ``packageCode`` | string, optional | Returns rates for the specified package type.<br/>
>  ``fromPostalCode`` | string, required | Originating postal code.<br/>
>  ``toState`` | string, optional | Destination State/Province. Please use two-character state/province abbreviation. Note this field is required for the following carriers: UPS<br/>
>  ``toCountry`` | string, required | Destination Country.  Please use the two-character ISO country code.<br/>
>  ``toPostalCode`` | string, required | Destination Postal Code.<br/>
>  ``toCity`` | string, optional | Destination City.<br/>
>  ``weight`` | Weight, required | Shipment's weight.  Use ``Weight`` object.<br/>
>  ``dimensions`` | Dimensions, optional | Shipment's dimensions.  Use ``Dimensions`` object. <br/>
>  ``confirmation`` | string, optional | The type of delivery confirmation that is to be used once the shipment is created.  Possible values: ``none``, ``delivery``, ``signature``, ``adult_signature``, and ``direct_signature``.  ``direct_signature`` is available for FedEx only.<br/>
>  ``residential`` | boolean, optional | Returns rates that account for the specified delivery confirmation type. Default value: false

*Tags:* `Shipments`

### Void Label

> Voids the specified label by shipmentId.  The body of this request should specify the following attributes:<br/>
> <br/>
> Name               |Data Type          |Description<br/>
> -------------------|-------------------|-------------------<br/>
>  ``shipmentId`` | number, required | ID of the shipment to void.

*Tags:* `Shipments`

### List Shipments with parameters

> Obtains a list of shipments that match the specified criteria.  Please note the following:<br/>
> <br/>
> - Only valid shipments with labels generated in ShipStation will be returned in the response. Orders that have been marked as shipped either through the UI or the API will not appear as they are considered external shipments.<br/>
> <br/>
> - To include every shipment's associated shipmentItems in the response, be sure to set the `includeShipmentItems` parameter to `true`.<br/>
> <br/>
> All of the available filters are optional.  They do not need to be included in the URL.  If you do include them, here's what the URL may look like:<br/>
> <br/>
> Url format with filters:<br/>
> <br/>
> ```<br/>
> shipments?recipientName={recipientName}<br/>
> &recipientCountryCode={recipientCountryCode}<br/>
> &orderNumber={orderNumber}<br/>
> &orderId={orderId}<br/>
> &carrierCode={carrierCode}<br/>
> &serviceCode={serviceCode}<br/>
> &trackingNumber={trackingNumber}<br/>
> &createDateStart={createDateStart}<br/>
> &createDateEnd={createDateEnd}<br/>
> &shipDateStart={shipDateStart}<br/>
> &shipDateEnd={shipDateEnd}<br/>
> &voidDateStart={voidDateStart}<br/>
> &voidDateEnd={voidDateEnd}<br/>
> &storeId={storeId}<br/>
> &includeShipmentItems={includeShipmentItems}<br/>
> &sortBy={sortBy}<br/>
> &sortDir={sortDir}<br/>
> &page={page}<br/>
> &pageSize={pageSize}<br/>
> ```

*Tags:* `Shipments`

#### Input Parameters
* `recipientName` - _required_ - Returns shipments shipped to the specified recipient name.
* `recipientCountryCode` - _required_ - Returns shipments shipped to the specified country code.
* `orderNumber` - _required_ - Returns shipments whose orders have the specified order number.
* `orderId` - _required_ - Returns shipments whose orders have the specified order ID.
* `carrierCode` - _required_ - Returns shipments shipped with the specified carrier.
* `serviceCode` - _required_ - Returns shipments shipped with the specified shipping service.
* `trackingNumber` - _required_ - Returns shipments with the specified tracking number.
* `createDateStart` - _required_ - Returns shipments created on or after the specified ``createDate``
* `createDateEnd` - _required_ - Returns shipments created on or before the specified ``createDate``
* `shipDateStart` - _required_ - Returns shipments with the ``shipDate`` on or after the specified date
* `shipDateEnd` - _required_ - Returns shipments with the ``shipDate`` on or before the specified date
* `voidDateStart` - _required_ - Returns shipments voided on or after the specified date
* `voidDateEnd` - _required_ - Returns shipments voided on or before the specified date
* `storeId` - _required_ - Returns shipments whose orders belong to the specified store ID.
* `includeShipmentItems` - _required_ - Specifies whether to include shipment items with results Default value: false.
* `sortBy` - _required_ - Sort the responses by a set value.  The response will be sorted based off the ascending dates (oldest to most current.)  If left empty, the response will be sorted by ascending ``createDate``.
    Possible values: ShipDate, CreateDate.
* `sortDir` - _required_ - Sets the direction of the sort order.
    Possible values: ASC, DESC.
* `page` - _required_ - page number.
* `pageSize` - _required_ - page size.

### Deactivate Store

> Deactivates the specified store.<br/>
> <br/>
> The body of this request has the following attributes:<br/>
> <br/>
> Name               |Data Type          |Description<br/>
> -------------------|-------------------|-------------------<br/>
> ``storeId``  | number, required | ID of the store to deactivate.

*Tags:* `Stores`

### Get Store Refresh Status

> Retrieves the refresh status of a given store.

*Tags:* `Stores`

#### Input Parameters
* `storeId` - _required_ - Specifies the store whose status will be retrieved.

### List Marketplaces

> Lists the marketplaces that can be integrated with ShipStation.

*Tags:* `Stores`

### Reactivate Store

> Reactivates the specified store. Note: stores are active by default<br/>
> <br/>
> The body of this request has the following attributes:<br/>
> <br/>
> Name               |Data Type          |Description<br/>
> -------------------|-------------------|-------------------<br/>
> ``storeId``  | number, required | ID of the store to reactivate.

*Tags:* `Stores`

### Refresh Store

> Initiates a store refresh.

*Tags:* `Stores`

#### Input Parameters
* `storeId` - _required_ - Specifies the store which will get refreshed.  If the storeId is not specified, a store refresh will be initiated for all refreshable stores on that account.
* `refreshDate` - _required_ - Specifies the starting date for new order imports.  If the refreshDate is not specified, ShipStation will use the last recorded refreshDate for that store.

### Get Store

*Tags:* `Stores`

#### Input Parameters
* `storeId` - _required_ - A unique ID generated by ShipStation and assigned to each store.

### Update Store

> Updates an existing store. This call does not currently support partial updates. The entire resource must be provided in the body of the request.

*Tags:* `Stores`

#### Input Parameters
* `storeId` - _required_ - A unique ID generated by ShipStation and assigned to each store.

### List Stores

> Retrieve the list of installed stores on the account.

*Tags:* `Stores`

#### Input Parameters
* `showInactive` - _required_ - Determines whether inactive stores will be returned in the list of stores.
* `marketplaceId` - _required_ - Returns stores of this marketplace type.

### List Users

*Tags:* `Users`

#### Input Parameters
* `showInactive` - _required_ - Determines whether inactive users will be returned in the response.

### List Warehouses

> Retrieves a list of your Ship From Locations (formerly known as warehouses).

*Tags:* `Warehouses`

### Create Warehouse

> Adds a Ship From Location (formerly known as warehouse) to your account.  The body of this request should specify the following attributes:<br/>
> <br/>
> Name               |Data Type          |Description<br/>
> -------------------|-------------------|-------------------<br/>
>  ``warehouseName`` | string, optional | Name of Ship From Location.<br/>
>  ``originAddress`` | Address, required | The origin address.  Shipping rates will be calculated from this address.  Use the [**Address**](https://www.shipstation.com/developer-api/#/reference/model-address) model.<br/>
>  ``returnAddress`` | Address, optional | The return address.  If a "returnAddress" is not specified, your "originAddress" will be used as your "returnAddress". Use the [**Address**](https://www.shipstation.com/developer-api/#/reference/model-address) model.<br/>
>  ``isDefault`` | boolean, optional | Specifies whether or not this will be your default Ship From Location.

*Tags:* `Warehouses`

### Delete Warehouse

> Removes warehouse from ShipStation's UI. Note this is a "soft" delete action so the warehouse will still exist in the database, but will be set to inactive

*Tags:* `Warehouses`

#### Input Parameters
* `warehouseId` - _required_ - A unique ID generated by ShipStation and assigned to each Ship From Location (formerly known as warehouse).

### Get Warehouse

> Returns a list of active Ship From Locations (formerly known as warehouses) on the ShipStation account. Warehouses are now called "Ship From Locations" in the UI.

*Tags:* `Warehouses`

#### Input Parameters
* `warehouseId` - _required_ - A unique ID generated by ShipStation and assigned to each Ship From Location (formerly known as warehouse).

### Update Warehouse

> Updates an existing Ship From Location (formerly known as warehouse). This call does not currently support partial updates. The entire resource must be provided in the body of the request. If a "returnAddress" object is not specified, your "originAddress" will be used as your "returnAddress".

*Tags:* `Warehouses`

#### Input Parameters
* `warehouseId` - _required_ - A unique ID generated by ShipStation and assigned to each Ship From Location (formerly known as warehouse).

### List Webhooks

> Retrieves a list of registered webhooks for the account

*Tags:* `Webhooks`

### Subscribe to Webhook

> Subscribes to a specific type of webhook. If a ``store_id`` is passed in, the webhooks will only be triggered for that specific ``store_id``.<br/>
> The ``event`` type that is passed in will determine what type of webhooks will be sent.<br/>
> <br/>
> Webhooks can be viewed & edited via the ShipStation Application under Integrations in the [**Account Settings**](https://ss.shipstation.com/#/settings/integrations).<br/>
> <br/>
> NOTE: Webhooks will be sent to the URL specified in the ``target_url``. The HTTP request will be sent via POST and will contain a [**webhook JSON object**](https://www.shipstation.com/developer-api/#/reference/model-webhook) in the body.<br/>
> <br/>
> The body of this request to subscribe has the following attributes:<br/>
> <br/>
> Name               |Data Type          |Description<br/>
> -------------------|-------------------|-------------------<br/>
> ``target_url``  | string, required | The URL to send the webhooks to<br/>
> ``event`` | string, required | The type of webhook to subscribe to. Must contain one of the following values: ORDER_NOTIFY, ITEM_ORDER_NOTIFY, SHIP_NOTIFY, ITEM_SHIP_NOTIFY<br/>
> ``store_id`` | int, optional | If passed in, the webhooks will only be triggered for this ``store_id``<br/>
> ``friendly_name`` | string, optional | Display name for the webhook

*Tags:* `Webhooks`

### Unsubscribe to Webhook

> Unsubscribes from a certain webhook.

*Tags:* `Webhooks`

#### Input Parameters
* `webhookId` - _required_ - A unique ID generated by ShipStation and assigned to each webhook.

## License

**flow**ground :- Telekom iPaaS / shipstation-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
