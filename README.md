# Rukka Zone
Este es un **sitio Web** orientado a referenciar el **desarrollo Web** y **desarrollo de Software** en general. Este **proyecto** esta desarrollado con intenciones **informativas** y **no meramente serias**. La intencion de este proyecto es el de poder documentar y tomar notas de manera transparente referentes a las tecnologias que voy aprendiendo, ademas de poder evidenciar mis conocimientos referentes a ciertas areas de la programacion

> Los archivos de este proyecto pueden ser libremente leidos, modificados, ejecutados y compartidos de acuerdo a la licencia *Creative Commons Attribution 4.0 International License*

La mayoria de tecnologias (si no todas) documentadas y mencionadas en este proyecto no son propias, y se debe credito a sus respectivos creadores

## Prerequisitos
Para poder levantar el **Web server** es necesario tener instalado **Python 3.9.x** y los modulos listados en [el archivo de requisitos](requirements.txt)

Es recomendable aislar los modulos en un entorno virtual. Para instalar los modulos requeridos y aislarlas en un entorno virtual, puede ejecutar las siguientes lineas en una terminal o consola

### Windows
```
py -m virtualenv env
env\Scripts\activate.bat
py -m pip install -r requirements.txt
```

### Linux | MacOS
```
python -m virtualenv env
source env/bin/activate
python -m pip install -r requirements.txt
```

## Levantando servidor
Para levantar el *servidor Web* esto simplemente es necesario dirigirse al directorio raiz del paquete y ejecutar la siguiente linea en una terminal o consola
```
python app.py
```

Esto tendra como *output* la direccion donde queda alojado el sitio Web (generalmente, [localhost:5000](http://localhost:5000)). Es posible acceder a ella mediante un **Browser**

###### Proyecto hecho con :heart: por **RukkaPlus**