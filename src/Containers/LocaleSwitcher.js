import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IntlActions } from '../Redux/Intl/actions';
import Link from '../Components/Link';
import ButtonGroup from '../Components/ButtonGroup';
class LocaleSwitcherContainer extends React.Component {
  render() {
    const { updateIntl, locale, style } = this.props;
    return (
      <ButtonGroup style={style}>
        <Link
          active={locale === 'en'}
          onClick={updateIntl.bind(this, 'en')}
          style={{ padding: '5px 10px', minWidth: 'auto' }}
        >
          En
        </Link>
        <Link
          active={locale === 'zh-cn'}
          onClick={updateIntl.bind(this, 'zh-cn')}
          style={{ padding: '5px 10px', minWidth: 'auto' }}
        >
          简体
        </Link>
        <Link
          active={locale === 'zh-hk'}
          onClick={updateIntl.bind(this, 'zh-hk')}
          style={{ padding: '5px 10px', minWidth: 'auto' }}
        >
          繁體
        </Link>
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocaleSwitcherContainer);
