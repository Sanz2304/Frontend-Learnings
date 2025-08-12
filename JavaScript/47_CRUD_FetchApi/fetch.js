async function fetchQuotes(){
    try{

        const quotesApi = await fetch('https://mimic-server-api.vercel.app/quotes') // By default fetch is a GET request

        if(!quotesApi.ok){
            throw new Error('URL is Wrong!')
        }

        const data = await quotesApi.json() 
        console.log(data);
        
    }

    catch(error){
        console.error(error);
        
    }
}

// fetchQuotes() // GET request


//Rendering the API Data in UI:
// async function fetchQuotes(id) {
//   try {
//     const quotesAPI = await fetch(
//       'https://mimic-server-api.vercel.app/quotes/' + id
//     )
//     if (!quotesAPI.ok) {
//       throw new Error('URL is wrong!')
//     }

//     const data = await quotesAPI.json()

//     const quoteEl = document.querySelector('#quote')
//     const authorEl = document.querySelector('#author')

//     quoteEl.innerText = data.quote
//     authorEl.textContent = data.author
//   } catch (error) {
//     console.error(error)
//   }
// }
// fetchQuotes(3)


async function createQuote(){
const response = await fetch('https://mimic-server-api.vercel.app/quotes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            quote : 'Do it till you die!',
            author : 'Santhosh'
        })
    })

    const data = await response.json()
    console.log(data);
    alert('Data added sucessfully!')
}

// createQuote()

async function updateQuote() {
    const response = await fetch('https://mimic-server-api.vercel.app/quotes/39', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            quote: 'Do or die!',
            author: 'Sheetal'
        })
    })
    const data = await response.json();
    console.log(data);
    alert('Data updated successfully!');
}

// updateQuote()


async function deleteQuote(id) {
  const response = await fetch(
    'https://mimic-server-api.vercel.app/quotes/' + id,
    {
      method: 'DELETE',
    }
  )

  const data = await response.json()
  console.log(data)
  alert('Data has been deleted!')
}

// deleteQuote(39)


async function updateQuoteAuthor(id) {
  const response = await fetch(
    'https://mimic-server-api.vercel.app/quotes/' + id,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        author: 'Anbuselvan rocky',
      }),
    }
  )
  const data = await response.json()
  console.log(data)
  alert('Author data has been updated')
}
// updateQuoteAuthor(39)


// Request Cancellation
async function readQuote() {
  const controller = new AbortController()
  const signal = controller.signal

  setTimeout(async () => {
    try {
      const response = await fetch(
        'https://mimic-server-api.vercel.app/quotes/2',
        {
          signal,
        }
      )
      const data = await response.json()
      console.log(data)
    } catch (error) {
      if (error.name === 'AbortError') {
        console.error('Fetch request has been aborted by another person')
      } else {
        console.error('fetche error')
      }
    }
  }, 5000)

  //   abort the fetch request
  setTimeout(() => {
    controller.abort()
    console.log('Fetch aborted after 3 secs')
  }, 3000)
}
// readQuote()