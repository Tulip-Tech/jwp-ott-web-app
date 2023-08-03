import type { PaymentDetail, Subscription, Transaction } from '#types/subscription';
import type { Consent, Customer, CustomerConsent, Profile } from '#types/account';
import { createStore } from '#src/stores/utils';
import type { Offer } from '#types/checkout';

type AccountStore = {
  loading: boolean;
  user: Customer | null;
  profile: Profile | null;
  canManageProfiles: boolean;
  selectingProfileAvatar: string | null;
  subscription: Subscription | null;
  transactions: Transaction[] | null;
  activePayment: PaymentDetail | null;
  customerConsents: CustomerConsent[] | null;
  publisherConsents: Consent[] | null;
  pendingOffer: Offer | null;
  canUpdateEmail: boolean;
  canRenewSubscription: boolean;
  canUpdatePaymentMethod: boolean;
  canChangePasswordWithOldPassword: boolean;
  canExportAccountData: boolean;
  canDeleteAccount: boolean;
  canShowReceipts: boolean;
  setLoading: (loading: boolean) => void;
};

export const useAccountStore = createStore<AccountStore>('AccountStore', (set) => ({
  loading: true,
  user: null,
  // todo: move profile data to separate store
  profile: null,
  canManageProfiles: false,
  selectingProfileAvatar: null,
  subscription: null,
  transactions: null,
  activePayment: null,
  customerConsents: null,
  publisherConsents: null,
  pendingOffer: null,
  canUpdateEmail: false,
  canRenewSubscription: false,
  canChangePasswordWithOldPassword: false,
  canExportAccountData: false,
  canDeleteAccount: false,
  canUpdatePaymentMethod: false,
  canShowReceipts: false,
  setLoading: (loading: boolean) => set({ loading }),
}));
