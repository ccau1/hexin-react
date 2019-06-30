import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { IntlActions } from "../Redux/Intl/actions";
import Button from "../Components/Button";
import ButtonGroup from "../Components/ButtonGroup";
class LocaleSwitcherContainer extends React.Component {
  render() {
    const { updateIntl, locale } = this.props;
    return (
      <ButtonGroup>
        <Button.Primary
          active={locale === "en"}
          onClick={updateIntl.bind(this, "en")}
        >
          English
        </Button.Primary>
        <Button.Primary
          active={locale === "zh-cn"}
          onClick={updateIntl.bind(this, "zh-cn")}
        >
          Simplified Chinese
        </Button.Primary>
        <Button.Primary
          active={locale === "zh-hk"}
          onClick={updateIntl.bind(this, "zh-hk")}
        >
          Traditional Chinese
        </Button.Primary>
      </ButtonGroup>
    );
  }
}

const mapStateToProps = state => ({ locale: state.intl.locale });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateIntl: IntlActions.updateIntl
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(
  LocaleSwitcherContainer
);
