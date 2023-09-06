import { Currency } from "./currency"
import { Department } from "./department"
import { SubDepartment } from "./subDepartment"

export interface Employee {
    "name":string
    "salary":number
    "currency": Currency,
    "on_contract"?: boolean,
    "department": Department,
    "sub_department": SubDepartment
}