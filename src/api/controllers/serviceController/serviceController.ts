import { serviceControllerCreateService } from './serviceControllerCreateService';
import { serviceControllerDeleteService } from './serviceControllerDeleteService';
import { serviceControllerReadService } from './serviceControllerReadService';
import { serviceControllerUpdateService } from './serviceControllerUpdateService';

export const serviceController = {
  createService: serviceControllerCreateService,
  updateService: serviceControllerUpdateService,
  readService: serviceControllerReadService,
  deleteService: serviceControllerDeleteService,
};
