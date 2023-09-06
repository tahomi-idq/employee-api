# Запуск приложения

```
npm start
```

## Endpoints:

### GET /auth Аутентификация и авторизация

data: 

```
{
        "key": "key-one"
    }
```

Для использования /api/ к запросу прикрепляется Authorizarion header со сгенерированным токеном

### GET /api/employee Получение

data: 

```
{
        "name": "Abhishek"
    }
```

### POST /api/employee Добавление

data: 

```
{
        "employee":{
            "name": "TestName",
            "salary": 3000,
            "currency": "USD",
            "department": "Engineering",
            "sub_department": "Platform",
            "on_contract": true
          }
    }
```

### DELETE /api/employee Удаление

data: 

```
{
        "name": "Anurag"
    }
```

### PATCH /api/employee Изменение

data: 

```
{
        "employee": {
            "name": "Himanshu",
            "salary": 3000,
            "currency": "USD",
            "department": "Engineering",
            "sub_department": "Platform",
            "on_contract": true
        }
    }
```

### GET /api/contract Список сотрудников с контрактом


### GET /api/department Список сотрудников по отделам

data: 

```
{
        "department": "Engineering"
    }
```

### GET /api/sub-department Список сотрудников по подразделениям

data: 

```
{
        "subDepartment": "Platform"
    }
```

# Задание:

## Изначальная структура данных

```json
[
  {
    "name": "Abhishek",
    "salary": "145000",
    "currency": "USD",
    "department": "Engineering",
    "sub_department": "Platform"
  },
  {
    "name": "Anurag",
    "salary": "90000",
    "currency": "USD",
    "department": "Banking",
    "on_contract": "true",
    "sub_department": "Loan"
  },
  {
    "name": "Himani",
    "salary": "240000",
    "currency": "USD",
    "department": "Engineering",
    "sub_department": "Platform"
  },
  {
    "name": "Yatendra",
    "salary": "30",
    "currency": "USD",
    "department": "Operations",
    "sub_department": "CustomerOnboarding"
  },
  {
    "name": "Ragini",
    "salary": "30",
    "currency": "USD",
    "department": "Engineering",
    "sub_department": "Platform"
  },
  {
    "name": "Nikhil",
    "salary": "110000",
    "currency": "USD",
    "on_contract": "true",
    "department": "Engineering",
    "sub_department": "Platform"
  },
  {
    "name": "Guljit",
    "salary": "30",
    "currency": "USD",
    "department": "Administration",
    "sub_department": "Agriculture"
  },
  {
    "name": "Himanshu",
    "salary": "70000",
    "currency": "EUR",
    "department": "Operations",
    "sub_department": "CustomerOnboarding"
  },
  {
    "name": "Anupam",
    "salary": "200000000",
    "currency": "INR",
    "department": "Engineering",
    "sub_department": "Platform"
  }
]
```

## Написать микросервис реализующий REST API

* Аутентификация и авторизация
* Добавление
* Изменение
* Удаление
* Список сотрудников с контрактом
* Список сотрудников по отделам
* Список сотрудников по подразделениям

## Требования
* Язык typescript
* Любая система сборки
* Любая база данных или без нее
* Написать функциональные тесты. (Любая система тестирования)
* Выложить на Github

## Документация

В формате md:
* Инструкция по тестированию 
* Инструкция по запуску