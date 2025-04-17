import { serviceControllerCreateService } from './serviceControllerCreateService';
import { serviceControllerUpdateService } from './serviceControllerUpdateService';
import { serviceControllerReadService } from './serviceControllerReadService';
import { serviceControllerDeleteService } from './serviceControllerDeleteService';

export const serviceController = {
  createService: serviceControllerCreateService,
  updateService: serviceControllerUpdateService,
  readService: serviceControllerReadService,
  deleteService: serviceControllerDeleteService,
};
