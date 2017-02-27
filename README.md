# EnterpriseApiClient-Javascript
Enterprise REST API Client Samples for manipulating templates and entities

# Example of Querying Entities
The query string when specifying metadata is unique in that it has collections of objects. The following is an example of how this works.

/content/v1/entity?page=1&drawerID=2&pageSize=10&type=300600&metadata[0][profileType]=1&metadata[0][fieldType]=string&metadata[0][fieldIndex]=0&metadata[0][fieldValue]=Active

This link queries all entities of type 300600 in drawer 2 where the first-string field on the first profile has the value “Active”.
