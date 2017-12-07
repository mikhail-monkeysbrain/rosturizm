#Архитектура проекта   

************************************************************************************
###Проект лежит в папке app  
  
### Папка src - исходники  
### Папка dist - скомпилированный проект  
	| - NPM и Bower  
	| - Сборка проекта gulp  
		| - jade  
		| - stylus  
		| - csso  
		| - autoprefixer-stylus  
		| - imageminifer  


************************************************************************************

##Менеджер пакетов Bower  

************************************************************************************

##Стили (stylus)  

	| - Исходники находятся в папке src/stylus/, собирается в dist/css.style и минифицируются  
		| - helpers.styl - хелперы и модификаторы  
		| - var.styl - переменные и миксины  
		| - blocks/ - стили блоков  
		| - elements/ - стили элементов  
	| - На страцицу подключается стили: reset.css, fonts.css vendors.css style.css  

************************************************************************************

##Верстка (JADE)  
  
	| - Исходники находятся в папке src/jade, собираются в dist/index.html  
		| - jade/blocks/ - блоки  
		| - jade/elements/ - элементы  

************************************************************************************

##скрипты (JS)  
  
	| - Исходники находятся в папке src/js/, собираются в dist/app.js и минифицируются, при необходимости инлайн подключения, подключаются ассинхронно  

************************************************************************************

##Вендорные файлы (vendors)  
  
	| - Исходники находятся в папке src/vendors/  
		| - Скипты собираются в dist/vendors/vendors.js и минифицируются  
		| - Стили собираются в dist/vendors/vendors.css и минифицируются  

************************************************************************************

##Task-manager GULP  

	| - На проекте используется NPM
	| - Зависимости прописаны в pacaje.json и bower.json
	| - node_modules и bower-components добавлены в .gitignore, для установки зависимостей выполнить npm up и bower update