export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 'BQAsB_-IOzEfyqhHv-uV0gDFereSF2Eok2SP7MR17xbTHxklvpFSG5gpbVu3-_uXMaW9mocK-dV1E5iPnhidsduGWbv0ei9FMm-RHZh3l5txCt5rH6rqxxgRSJOegSbiPOd-ZO98qSBssSQtRXnL4wIjqoCOKhF7y9bkrEloqeA60fTAniUJcTTvn8TFvhsWUZI5qML1ptlBgwJAEN2ZL_Ep7Q7M7lkjsCNBJ5Umm8seyKeqDfZd',
};
const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }
}

export default reducer;