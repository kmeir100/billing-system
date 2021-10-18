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
```shell
git clone https://github.com/kmeir100/billing-system.git
cd billing-system/
npm install
cd frontend/
npm install
cd ..
npm run all
```

# TODO
- Input Validation.  
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


