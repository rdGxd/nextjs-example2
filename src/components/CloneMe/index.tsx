import * as Styled from "./styles";

export type CloneMeProps = {
  title?: string;
};

export const CloneMe = ({ title = "Change-me" }: CloneMeProps) => {
  return (
    <Styled.Wrapper>
      <h1>{title}</h1>
    </Styled.Wrapper>
  );
};
