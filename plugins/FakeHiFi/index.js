import { intercept } from "@neptune";
import { refreshUserSession } from "@neptune/actions/session";

const unloadables = [
  intercept("user/LOAD_USER_SUCCESS", ([user]) => {
    // I don't think this does anything, but it's fun.
    user.meta.earlyAccessProgram = true;

    user.subscription = {
      ...user.subscription,
      status: "ACTIVE",
      subscription: {
        type: "PREMIUM_PLUS",
        offlineGracePeriod: 30,
      },
      premiumAccess: true,
      canGetTrial: false,
      paymentType: "PARENT",
    };
  }),

  intercept(
    ["BOOTSTRAP_DONE", "playbackControls/PLAY"],
    () => {
      refreshUserSession({ shouldReload: false });
    },
    true
  ),
];

export const onUnload = () => unloadables.forEach(u => u())
