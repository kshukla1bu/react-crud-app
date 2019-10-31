import Data from './contacts.json';

export const getAll = () =>
{
  return Data
}

export const getDOB = (contact) =>
{
  for(let i = 0; i < Data.length; i++)
  {
    let DOB = ''
    console.log('Inside Capi function', contact)
    if(contact.name === Data[i].name)
    {
      DOB = Data[i].DOB
      console.log(contact.name, Data[i].name)
    } 
    return DOB
  }
}


/*
export const remove = (contact) =>
  fetch(`${api}/contacts/${contact.id}`, { method: 'DELETE', headers })
    .then(res => res.json())
    .then(data => data.contact)

export const create = (body) =>
  fetch(`${api}/contacts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
*/