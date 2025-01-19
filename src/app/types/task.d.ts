export interface Task {
  color: string;
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskCardProps {
  id: number;
  title: string;
  color: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

export interface TaskFormProps {
  onSubmit: (data: { title: string; color: string }) => void;
  initialData?: { title: string; color: string };
  children: React.ReactNode;
}

export interface ButtonProps {
  pageLink: string;
  customClasses: string;
  labelStyle: string;
  imgPath: string;
  imgAlt: string;
  imgHeight: number;
  imgWidth: number;
  imgStyle: string;
  buttonTitle: string;
  isSubmit?: boolean;
}

export interface TaskStatusProps {
  label: string;
  value: number;
  total?: number;
  labelColor: string;
  valueColor: string;
}

export interface ColorThumbnailProps {
  color: string;
}
