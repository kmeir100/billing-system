# Billing System

A basic billing system which enables the merchant to manage his store.   
In this task I focus on customers and transaction entities.

# Technologies

**Backend** - Node.js, ExpressJS  
**Frontend** - React, Bootstrap  
**DB** - MongoDB  

### DB Schemas:
#### Customers:
   
`id, customer_id, first_name, last_name, email, gender, country, city, street, phone, total_price, currency, cerdit_card_type, cerdit_card_number`
 
#### Transactions:
  
`id, customer_email, name, phone, item_name, date, final_price, discount`

# How to Run
1. Run mongoDB server (`mongod` on Mac)
2. Run the following:
```shell
git clone https://github.com/kmeir100/billing-system.git
cd billing-system/
npm install
cd frontend/
npm install
cd ..
npm run all
```
3. Import data (from data.json) to `customers` collection on db

# TODO
- Fix a bug where the main page isn't re-rendering *only* on adding a new transaction. (Currently need to refresh manually)
- Validation:
   -  Clien side validation - validate all inputs in the Modals Form: Add and Update.
   -  Server side validation - validate the params on the requests.
- When deleteing transaction - do not delete from DB, instead add a `deleted` flag.  
- Return relevant response to client:
  - For success return `200 ok`
  - For failure return error reason
- Handle errors: Show relevant error dialog to the client
- Currency adaptation: 
   - Show relevant currency sign according to Customer's currency
   - Add currency to `Transactions` table
- Add an `Items` Table in DB that has `item_id` and can be connected to `item_id` in transaction. (Currently has only `item_name`)
- Some product features:
  - Add Filter and Sort for transactions
  - Login screen for the merchant


