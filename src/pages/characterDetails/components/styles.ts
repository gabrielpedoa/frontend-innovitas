import styled from "styled-components";

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

 
  @media (max-width: 900px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const FieldLabel = styled.span`
  font-size: 12px;
  color: #9ca3af;
`;

export const FieldInput = styled.input`
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 6px;
  padding: 8px 10px;
  color: white;
  font-size: 14px;

    @media (max-width: 900px) {
    flex: 1;
    text-align: center;
  }

  &:read-only {
    border: none;
    background: transparent;
    padding-left: 0;
  }
`;
