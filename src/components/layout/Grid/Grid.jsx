import styled from "styled-components";

export const RowCenter = styled.div`
  display: flex;
  width: ${props => props.width ?? '100%'};
  flex-direction: row;
  justify-content: center;
  align-items: ${props => props.alignItems ?? 'center'};
  padding-left: ${props => props.pl ?? '15px' };
  padding-right: ${props => props.pr ?? '15px' };
  padding-top: ${props => props.pt ?? '15px' };
  padding-bottom: ${props => props.pb ?? '15px' };
`
export const RowStart = styled.div`
  display: flex;
  width: ${props => props.width ?? '100%'};
  flex-direction: row;
  justify-content: flex-start;
  align-items: ${props => props.alignItems ?? 'center'};
  padding: 0px;
  padding-left: ${props => props.pl ?? '0px' };
  padding-right: ${props => props.pr ?? '0px' };
  padding-top: ${props => props.pt ?? '0px' };
  padding-bottom: ${props => props.pb ?? '0px' };
`
export const RowEnd = styled.div`
  display: flex;
  width: ${props => props.width ?? '100%'};
  flex-direction: row;
  justify-content: flex-end;
  align-items: ${props => props.alignItems ?? 'center'};
  padding-left: ${props => props.pl ?? '15px' };
  padding-right: ${props => props.pr ?? '15px' };
  padding-top: ${props => props.pt ?? '15px' };
  padding-bottom: ${props => props.pb ?? '15px' };
`
export const ColStart = styled.div`
  display: flex;
  width: ${props => props.width ?? '100%'};
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${props => props.alignItems ?? 'flex-start'};
  padding-left: ${props => props.pl ?? '15px' };
  padding-right: ${props => props.pr ?? '15px' };
  padding-top: ${props => props.pt ?? '15px' };
  padding-bottom: ${props => props.pb ?? '15px' };
`
export const ColCenter = styled.div`
  display: flex;
  width: ${props => props.width ?? '100%'};
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.alignItems ?? 'center'};
  padding-left: ${props => props.pl ?? '15px' };
  padding-right: ${props => props.pr ?? '15px' };
  padding-top: ${props => props.pt ?? '15px' };
  padding-bottom: ${props => props.pb ?? '15px' };
`
export const ColEnd = styled.div`
  display: flex;
  width: ${props => props.width ?? '100%'};
  flex-direction: column;
  justify-content: flex-end;
  align-items: ${props => props.alignItems ?? 'flex-end'};
  padding-left: ${props => props.pl ?? '15px' };
  padding-right: ${props => props.pr ?? '15px' };
  padding-top: ${props => props.pt ?? '15px' };
  padding-bottom: ${props => props.pb ?? '15px' };
`
export const RowSpaceBetween = styled.div`
  display: flex;
  width: ${props => props.width ?? '100%'};
  flex-direction: row;
  justify-content: space-between;
  align-items: ${props => props.alignItems ?? 'center'};
  padding-left: ${props => props.pl ?? '0px' };
  padding-right: ${props => props.pr ?? '0px' };
  padding-top: ${props => props.pt ?? '0px' };
  padding-bottom: ${props => props.pb ?? '0px' };
`
export const ColSpaceBetween = styled.div`
  display: flex;
  width: ${props => props.width ?? '100%'};
  flex-direction: column;
  justify-content: space-between;
  align-items: ${props => props.alignItems ?? 'center'};
  padding-left: ${props => props.pl ?? '15px' };
  padding-right: ${props => props.pr ?? '15px' };
  padding-top: ${props => props.pt ?? '15px' };
  padding-bottom: ${props => props.pb ?? '15px' };
`
export const RowSpaceAround = styled.div`
  display: flex;
  width: ${props => props.width ?? '100%'};
  flex-direction: row;
  justify-content: space-around;
  align-items: ${props => props.alignItems ?? 'center'};
  padding-left: ${props => props.pl ?? '15px' };
  padding-right: ${props => props.pr ?? '15px' };
  padding-top: ${props => props.pt ?? '15px' };
  padding-bottom: ${props => props.pb ?? '15px' };
`
export const ColSpaceAround = styled.div`
  display: flex;
  width: ${props => props.width ?? '100%'};
  flex-direction: column;
  justify-content: space-around;
  align-items: ${props => props.alignItems ?? 'center'};
  padding-left: ${props => props.pl ?? '15px' };
  padding-right: ${props => props.pr ?? '15px' };
  padding-top: ${props => props.pt ?? '15px' };
  padding-bottom: ${props => props.pb ?? '15px' };
`
export const Container = styled.div`
  width: ${props => props.width ?? ''};
  height: ${props => props.height ?? ''};
  margin: ${props => props.margin ?? ''};
  margin-top: ${props => props.mt ?? ''};
  margin-left: ${props => props.ml ?? ''};
  margin-right: ${props => props.mr ?? ''};
  margin-bottom: ${props => props.mb ?? ''};
  padding-top: ${props => props.pt ?? ''};
  padding-left: ${props => props.pl ?? ''};
  padding-right: ${props => props.pr ?? ''};
  padding-bottom: ${props => props.pb ?? ''};
`