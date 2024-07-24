# Implementation Notes  

## simulated recieving json data from API using json file 

### MainContainer.jsx
```   
   const { data, loading, error } = useFetch("/data.json"); 

```
### useFetch.jsx

```     
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

```

## simulated sending json data after change order to API by printing the updated json file to console 

### Moving item 5 to be at order 4 

#### Before
```
[
  {
    "id": 3,
    "order": 1
  },
  {
    "id": 2,
    "order": 2
  },
  {
    "id": 1,
    "order": 3
  },
  {
    "id": 4,
    "order": 4
  },
  {
    "id": 5,
    "order": 5
  },
  {
    "id": 6,
    "order": 6
  }
]
```
#### After

```
 [
  {
    "id": 3,
    "order": 1
  },
  {
    "id": 2,
    "order": 2
  },
  {
    "id": 1,
    "order": 3
  },
  {
    "id": 5,
    "order": 4
  },
  {
    "id": 4,
    "order": 5
  },
  {
    "id": 6,
    "order": 6
  }
]

```

## Provide the ability to add new items
### The new items appended directly to the list 

#### e.g Adding item 7 

```
 [
  {
    "id": 1,
    "order": 1
  },
  {
    "id": 2,
    "order": 2
  },
  {
    "id": 3,
    "order": 3
  },
  {
    "id": 4,
    "order": 4
  },
  {
    "id": 5,
    "order": 5
  },
  {
    "id": 6,
    "order": 6
  },
  {
    "id": 7,
    "order": 7
  }
]
```
## Provide the ability to delete item

## Provide Scroll while darging feature 
