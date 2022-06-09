import { IApproveCourseDto } from 'types/api.dto';
import { IRequest } from 'types/request';

export interface IRequestsProps {
  actionTarget: IApproveCourseDto;
  isRequestsLoading: boolean;
  isApproveLoading: boolean;
  isDeclineLoading: boolean;
  approveRequest: (params: IApproveCourseDto) => void;
  declineRequest: (requestId: string) => void;
  requests?: IRequest[];
}

export interface IRequestItemProps
  extends Pick<
    IRequestsProps,
    'actionTarget' | 'isApproveLoading' | 'isDeclineLoading' | 'approveRequest' | 'declineRequest'
  > {
  request: IRequest;
}

export interface IRequestButtonsProps extends Omit<IRequestItemProps, 'request'> {
  requestId: string;
}
