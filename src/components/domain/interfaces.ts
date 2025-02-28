import { EventType, TaxFeeTypes } from "./constants";

export interface Step {
  title: string;
  isCompleted: boolean;
  hasError: boolean;
}

export interface FormFooterProps {
  onSave: () => void;
  onBack?: () => void;
  onForward?: () => void;
}

export interface StepItem {
  title: string;
  isCompleted: boolean;
  hasError: boolean;
}

export interface TaxFee {
  name: string;
  amount: number;
  type: TaxFeeTypes;
}

export interface EventDate {
  startDate: Date | null;
  endDate: Date | null;
}

export interface FormData {
  eventType: EventType;
  eventName: string;
  enabled: boolean;
  overlayTitleOnBanner: boolean;
  overlayTitle: string;
  bannerImage?: File;
  subdomain?: string;
  eventAddress?: string;
  venueName?: string;
  featuredHotelsTitle?: string;
  minimumNights?: number;
  taxesAndFees: TaxFee[];
  bookableDates: [Date, Date] | null;
  checkInOut: [Date, Date] | null;
  eventDates: EventDate[];
}
