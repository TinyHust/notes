import { GRPC_URL } from '@src/constants/environtments';
import { handleGRPCError } from '@src/errors';
import { WhitelistServicePromiseClient } from '@src/proto/whitelist_grpc_web_pb';
import { GetListWhitelistRequest } from '@src/proto/whitelist_pb';
import { PageRequest } from '@src/proto/common_message_pb';

const whitelistService = new WhitelistServicePromiseClient(GRPC_URL);

export const getWhitelist = async (
    networkId,
    page,
    rowsPerPage,
    accessToken,
) => {
    const requestModel = new GetListWhitelistRequest();
    const requestModelCommon = new PageRequest();
    requestModelCommon.setPage(page);
    requestModelCommon.setPageSize(rowsPerPage);
    requestModel.setPagination(requestModelCommon);
    requestModel.setNetworkId(networkId);

    const metadata = {
        Authorization: `Bearer ${accessToken}`,
    };

    try {
        const res = await whitelistService.getListWhitelist(
            requestModel,
            metadata,
        );

        return res.toObject();
    } catch (error) {
        return handleGRPCError(error);
    }
};
