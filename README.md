# Spendo

![](./Documentation/Untitled-1b2b56c8-2515-4163-91be-31724aa83b0c.png)

# Libraries Used

- Bootstrap
- React

# Store

- Redux

# Caching Mechanism

 For the purpose of caching, I have used the following approach. 

As and when the user changes the slider, it triggers an action to check if the amount and month combination exist in the localStorage. 

If the combination exists in the localStorage, we do not make a request to the server to fetch the details and get the details from the cache. To intercept every request I have created a custom middleware which intercepts the actions of the type CHANGE_LOAN and CHANGE_DURATION which include payloads with the respective values for the new loan and duration respectively. I then check if the combination is present in the localStorage which looks like this.

![](./Documentation/Untitled-7c67fda5-ab03-4ae0-80d0-08d68455c215.png)

If the combination is not present in the cache, I make a call to the server to fetch the data. On completion of the request, the amount and duration combination is then added to localstorage as the key and the details as the value. 


# Screenshot

![](./Documentation/Untitled-fe66ed2a-9f08-4c08-aaaf-07a58f161c78.png)