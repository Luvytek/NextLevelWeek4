import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../models/Survey";
import { User } from "../models/User"


@EntityRepository(Survey)
class SurveysRepository extends Repository<User> {

}
export { SurveysRepository }