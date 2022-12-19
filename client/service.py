import requests

class Product:
    id_: int
    title: str

    def __init__(self, id_ : int, title: str) -> None:
        self.id = id_
        self.title = title

class ProductService:

    def getProducts():
        url = "http://localhost:10832/graphql"
        json = {
            "query": """
                {
                getAllProducts {
                    id
                    title
                }  
                }
            """
        }

        response = requests.post(url, json=json)
        productsList = []
        try:
            for product in response.json()["data"]:
                productsList.append(Product(product["id"], product["title"]))
            return productsList
        except Exception as e:
            print(e)
            return []

