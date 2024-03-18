## Patron de diseño Singleton

El patrón de diseño Singleton es un patrón de creación que garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a esa instancia.

### Implementación en JavaScript

Implementación en JavaScript

```javascript
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}
```

Implementación en Python

```python
class Singleton:
    _instance = None
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
```

Implementación en Java

```java
public class Singleton {
    private static Singleton instance;
    private Singleton() {}
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

### Uso

```javascript
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true
```

### Aplicaciones

-   Cuando necesitas una única instancia de una clase en tu aplicación.
-   Cuando necesitas un punto de acceso global a una instancia.
-   Cuando necesitas reducir el uso de recursos en tu aplicación.
-   Cuando necesitas una única conexión a una base de datos.
-   Cuando necesitas una única conexión a un servidor.
-   Cuando necesitas una única cola de mensajes.
-   Cuando necesitas una única cache de datos.
-   Cuando necesitas una única configuración de aplicación.

## Patron de diseño Factory

El patrón de diseño Factory es un patrón de creación que proporciona una interfaz para crear objetos en una superclase, pero permite a las subclases alterar el tipo de objetos que se crearán.

### Implementación en JavaScript

```javascript
class Product {
    constructor(name) {
        this.name = name;
    }
}

class Creator {
    create(name) {
        return new Product(name);
    }
}
```

Implementación en Python

```python
class Product:
    def __init__(self, name):
        self.name = name

class Creator:
    def create(self, name):
        return Product(name)
```

Implementación en Java

```java
public class Product {
    private String name;
    public Product(String name) {
        this.name = name;
    }
}

public class Creator {
    public Product create(String name) {
        return new Product(name);
    }
}
```
