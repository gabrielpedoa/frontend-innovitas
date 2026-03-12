import { FieldContainer, FieldInput, FieldLabel } from "./styles";

interface CharacterFieldProps {
  label: string;
  value?: string;
  editable?: boolean;
  onChange?: (value: string) => void;
}

export default function CharacterField({
  label,
  value,
  editable = false,
  onChange,
}: CharacterFieldProps) {
  return (
    <FieldContainer>
      <FieldLabel>{label}</FieldLabel>

      <FieldInput
        value={value || ""}
        readOnly={!editable}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </FieldContainer>
  );
}
