// @External Dependencies
import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// @Component
export const RankingTerribleIcon = ({ grayscale }) => (
  <Wrapper grayscale={grayscale}>
    <svg
      viewBox="0 0 47 48"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="el_1lG5EnrEt">
      <style
        dangerouslySetInnerHTML={{
          __html:
            '@-webkit-keyframes el_J194wskxoC_chPXIwxzp_Animation{0%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(0px, 0px);transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(0px, 0px);}15%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(0px, 0px);transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(0px, 0px);}20%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(3px, 0px);transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(3px, 0px);}25%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(-3px, 0px);transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(-3px, 0px);}30%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(3px, 0px);transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(3px, 0px);}35%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(-3px, 0px);transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(-3px, 0px);}40%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(3px, 0px);transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(3px, 0px);}45%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(-3px, 0px);transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(-3px, 0px);}60%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(0px, 0px);transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(0px, 0px);}100%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(0px, 0px);transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(0px, 0px);}}@keyframes el_J194wskxoC_chPXIwxzp_Animation{0%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(0px, 0px);transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(0px, 0px);}15%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(0px, 0px);transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(0px, 0px);}20%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(3px, 0px);transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(3px, 0px);}25%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(-3px, 0px);transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(-3px, 0px);}30%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(3px, 0px);transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(3px, 0px);}35%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(-3px, 0px);transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(-3px, 0px);}40%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(3px, 0px);transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(3px, 0px);}45%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(-3px, 0px);transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(-3px, 0px);}60%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(0px, 0px);transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(0px, 0px);}100%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(0px, 0px);transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(0px, 0px);}}@-webkit-keyframes el_mnl6-XynVL_SpBftuKUs_Animation{0%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(0px, 0px);transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(0px, 0px);}15%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(0px, 0px);transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(0px, 0px);}20%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(3px, 0px);transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(3px, 0px);}25%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(-3px, 0px);transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(-3px, 0px);}30%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(3px, 0px);transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(3px, 0px);}35%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(-3px, 0px);transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(-3px, 0px);}40%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(3px, 0px);transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(3px, 0px);}45%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(-3px, 0px);transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(-3px, 0px);}60%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(0px, 0px);transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(0px, 0px);}100%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(0px, 0px);transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(0px, 0px);}}@keyframes el_mnl6-XynVL_SpBftuKUs_Animation{0%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(0px, 0px);transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(0px, 0px);}15%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(0px, 0px);transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(0px, 0px);}20%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(3px, 0px);transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(3px, 0px);}25%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(-3px, 0px);transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(-3px, 0px);}30%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(3px, 0px);transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(3px, 0px);}35%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(-3px, 0px);transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(-3px, 0px);}40%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(3px, 0px);transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(3px, 0px);}45%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(-3px, 0px);transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(-3px, 0px);}60%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(0px, 0px);transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(0px, 0px);}100%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(0px, 0px);transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(0px, 0px);}}@-webkit-keyframes el_eAs2oFFOY2_bEhMbhqyZ_Animation{0%{-webkit-transform: translate(15px, 29px) translate(-15px, -29px) translate(0px, 0px);transform: translate(15px, 29px) translate(-15px, -29px) translate(0px, 0px);}15%{-webkit-transform: translate(15px, 29px) translate(-15px, -29px) translate(0px, 0px);transform: translate(15px, 29px) translate(-15px, -29px) translate(0px, 0px);}20%{-webkit-transform: translate(15px, 29px) translate(-15px, -29px) translate(3px, 0px);transform: translate(15px, 29px) translate(-15px, -29px) translate(3px, 0px);}25%{-webkit-transform: translate(15px, 29px) translate(-15px, -29px) translate(-3px, 0px);transform: translate(15px, 29px) translate(-15px, -29px) translate(-3px, 0px);}30%{-webkit-transform: translate(15px, 29px) translate(-15px, -29px) translate(3px, 0px);transform: translate(15px, 29px) translate(-15px, -29px) translate(3px, 0px);}35%{-webkit-transform: translate(15px, 29px) translate(-15px, -29px) translate(-3px, 0px);transform: translate(15px, 29px) translate(-15px, -29px) translate(-3px, 0px);}40%{-webkit-transform: translate(15px, 29px) translate(-15px, -29px) translate(3px, 0px);transform: translate(15px, 29px) translate(-15px, -29px) translate(3px, 0px);}45%{-webkit-transform: translate(15px, 29px) translate(-15px, -29px) translate(-3px, 0px);transform: translate(15px, 29px) translate(-15px, -29px) translate(-3px, 0px);}60%{-webkit-transform: translate(15px, 29px) translate(-15px, -29px) translate(0px, 0px);transform: translate(15px, 29px) translate(-15px, -29px) translate(0px, 0px);}100%{-webkit-transform: translate(15px, 29px) translate(-15px, -29px) translate(0px, 0px);transform: translate(15px, 29px) translate(-15px, -29px) translate(0px, 0px);}}@keyframes el_eAs2oFFOY2_bEhMbhqyZ_Animation{0%{-webkit-transform: translate(15px, 29px) translate(-15px, -29px) translate(0px, 0px);transform: translate(15px, 29px) translate(-15px, -29px) translate(0px, 0px);}15%{-webkit-transform: translate(15px, 29px) translate(-15px, -29px) translate(0px, 0px);transform: translate(15px, 29px) translate(-15px, -29px) translate(0px, 0px);}20%{-webkit-transform: translate(15px, 29px) translate(-15px, -29px) translate(3px, 0px);transform: translate(15px, 29px) translate(-15px, -29px) translate(3px, 0px);}25%{-webkit-transform: translate(15px, 29px) translate(-15px, -29px) translate(-3px, 0px);transform: translate(15px, 29px) translate(-15px, -29px) translate(-3px, 0px);}30%{-webkit-transform: translate(15px, 29px) translate(-15px, -29px) translate(3px, 0px);transform: translate(15px, 29px) translate(-15px, -29px) translate(3px, 0px);}35%{-webkit-transform: translate(15px, 29px) translate(-15px, -29px) translate(-3px, 0px);transform: translate(15px, 29px) translate(-15px, -29px) translate(-3px, 0px);}40%{-webkit-transform: translate(15px, 29px) translate(-15px, -29px) translate(3px, 0px);transform: translate(15px, 29px) translate(-15px, -29px) translate(3px, 0px);}45%{-webkit-transform: translate(15px, 29px) translate(-15px, -29px) translate(-3px, 0px);transform: translate(15px, 29px) translate(-15px, -29px) translate(-3px, 0px);}60%{-webkit-transform: translate(15px, 29px) translate(-15px, -29px) translate(0px, 0px);transform: translate(15px, 29px) translate(-15px, -29px) translate(0px, 0px);}100%{-webkit-transform: translate(15px, 29px) translate(-15px, -29px) translate(0px, 0px);transform: translate(15px, 29px) translate(-15px, -29px) translate(0px, 0px);}}@-webkit-keyframes el_9f7SAv3HEy_Vr_RzEbyJ_Animation{0%{-webkit-transform: translate(13px, 17px) translate(-13px, -17px) translate(0px, 0px);transform: translate(13px, 17px) translate(-13px, -17px) translate(0px, 0px);}15%{-webkit-transform: translate(13px, 17px) translate(-13px, -17px) translate(0px, 0px);transform: translate(13px, 17px) translate(-13px, -17px) translate(0px, 0px);}20%{-webkit-transform: translate(13px, 17px) translate(-13px, -17px) translate(3px, 0px);transform: translate(13px, 17px) translate(-13px, -17px) translate(3px, 0px);}25%{-webkit-transform: translate(13px, 17px) translate(-13px, -17px) translate(-3px, 0px);transform: translate(13px, 17px) translate(-13px, -17px) translate(-3px, 0px);}30%{-webkit-transform: translate(13px, 17px) translate(-13px, -17px) translate(3px, 0px);transform: translate(13px, 17px) translate(-13px, -17px) translate(3px, 0px);}35%{-webkit-transform: translate(13px, 17px) translate(-13px, -17px) translate(-3px, 0px);transform: translate(13px, 17px) translate(-13px, -17px) translate(-3px, 0px);}40%{-webkit-transform: translate(13px, 17px) translate(-13px, -17px) translate(3px, 0px);transform: translate(13px, 17px) translate(-13px, -17px) translate(3px, 0px);}45%{-webkit-transform: translate(13px, 17px) translate(-13px, -17px) translate(-3px, 0px);transform: translate(13px, 17px) translate(-13px, -17px) translate(-3px, 0px);}60%{-webkit-transform: translate(13px, 17px) translate(-13px, -17px) translate(0px, 0px);transform: translate(13px, 17px) translate(-13px, -17px) translate(0px, 0px);}100%{-webkit-transform: translate(13px, 17px) translate(-13px, -17px) translate(0px, 0px);transform: translate(13px, 17px) translate(-13px, -17px) translate(0px, 0px);}}@keyframes el_9f7SAv3HEy_Vr_RzEbyJ_Animation{0%{-webkit-transform: translate(13px, 17px) translate(-13px, -17px) translate(0px, 0px);transform: translate(13px, 17px) translate(-13px, -17px) translate(0px, 0px);}15%{-webkit-transform: translate(13px, 17px) translate(-13px, -17px) translate(0px, 0px);transform: translate(13px, 17px) translate(-13px, -17px) translate(0px, 0px);}20%{-webkit-transform: translate(13px, 17px) translate(-13px, -17px) translate(3px, 0px);transform: translate(13px, 17px) translate(-13px, -17px) translate(3px, 0px);}25%{-webkit-transform: translate(13px, 17px) translate(-13px, -17px) translate(-3px, 0px);transform: translate(13px, 17px) translate(-13px, -17px) translate(-3px, 0px);}30%{-webkit-transform: translate(13px, 17px) translate(-13px, -17px) translate(3px, 0px);transform: translate(13px, 17px) translate(-13px, -17px) translate(3px, 0px);}35%{-webkit-transform: translate(13px, 17px) translate(-13px, -17px) translate(-3px, 0px);transform: translate(13px, 17px) translate(-13px, -17px) translate(-3px, 0px);}40%{-webkit-transform: translate(13px, 17px) translate(-13px, -17px) translate(3px, 0px);transform: translate(13px, 17px) translate(-13px, -17px) translate(3px, 0px);}45%{-webkit-transform: translate(13px, 17px) translate(-13px, -17px) translate(-3px, 0px);transform: translate(13px, 17px) translate(-13px, -17px) translate(-3px, 0px);}60%{-webkit-transform: translate(13px, 17px) translate(-13px, -17px) translate(0px, 0px);transform: translate(13px, 17px) translate(-13px, -17px) translate(0px, 0px);}100%{-webkit-transform: translate(13px, 17px) translate(-13px, -17px) translate(0px, 0px);transform: translate(13px, 17px) translate(-13px, -17px) translate(0px, 0px);}}@-webkit-keyframes el_yfYyxsm3On_QUjxncZM4_Animation{0%{-webkit-transform: translate(28px, 17px) translate(-28px, -17px) translate(0px, 0px);transform: translate(28px, 17px) translate(-28px, -17px) translate(0px, 0px);}15%{-webkit-transform: translate(28px, 17px) translate(-28px, -17px) translate(0px, 0px);transform: translate(28px, 17px) translate(-28px, -17px) translate(0px, 0px);}20%{-webkit-transform: translate(28px, 17px) translate(-28px, -17px) translate(3px, 0px);transform: translate(28px, 17px) translate(-28px, -17px) translate(3px, 0px);}25%{-webkit-transform: translate(28px, 17px) translate(-28px, -17px) translate(-3px, 0px);transform: translate(28px, 17px) translate(-28px, -17px) translate(-3px, 0px);}30%{-webkit-transform: translate(28px, 17px) translate(-28px, -17px) translate(3px, 0px);transform: translate(28px, 17px) translate(-28px, -17px) translate(3px, 0px);}35%{-webkit-transform: translate(28px, 17px) translate(-28px, -17px) translate(-3px, 0px);transform: translate(28px, 17px) translate(-28px, -17px) translate(-3px, 0px);}40%{-webkit-transform: translate(28px, 17px) translate(-28px, -17px) translate(3px, 0px);transform: translate(28px, 17px) translate(-28px, -17px) translate(3px, 0px);}45%{-webkit-transform: translate(28px, 17px) translate(-28px, -17px) translate(-3px, 0px);transform: translate(28px, 17px) translate(-28px, -17px) translate(-3px, 0px);}60%{-webkit-transform: translate(28px, 17px) translate(-28px, -17px) translate(0px, 0px);transform: translate(28px, 17px) translate(-28px, -17px) translate(0px, 0px);}100%{-webkit-transform: translate(28px, 17px) translate(-28px, -17px) translate(0px, 0px);transform: translate(28px, 17px) translate(-28px, -17px) translate(0px, 0px);}}@keyframes el_yfYyxsm3On_QUjxncZM4_Animation{0%{-webkit-transform: translate(28px, 17px) translate(-28px, -17px) translate(0px, 0px);transform: translate(28px, 17px) translate(-28px, -17px) translate(0px, 0px);}15%{-webkit-transform: translate(28px, 17px) translate(-28px, -17px) translate(0px, 0px);transform: translate(28px, 17px) translate(-28px, -17px) translate(0px, 0px);}20%{-webkit-transform: translate(28px, 17px) translate(-28px, -17px) translate(3px, 0px);transform: translate(28px, 17px) translate(-28px, -17px) translate(3px, 0px);}25%{-webkit-transform: translate(28px, 17px) translate(-28px, -17px) translate(-3px, 0px);transform: translate(28px, 17px) translate(-28px, -17px) translate(-3px, 0px);}30%{-webkit-transform: translate(28px, 17px) translate(-28px, -17px) translate(3px, 0px);transform: translate(28px, 17px) translate(-28px, -17px) translate(3px, 0px);}35%{-webkit-transform: translate(28px, 17px) translate(-28px, -17px) translate(-3px, 0px);transform: translate(28px, 17px) translate(-28px, -17px) translate(-3px, 0px);}40%{-webkit-transform: translate(28px, 17px) translate(-28px, -17px) translate(3px, 0px);transform: translate(28px, 17px) translate(-28px, -17px) translate(3px, 0px);}45%{-webkit-transform: translate(28px, 17px) translate(-28px, -17px) translate(-3px, 0px);transform: translate(28px, 17px) translate(-28px, -17px) translate(-3px, 0px);}60%{-webkit-transform: translate(28px, 17px) translate(-28px, -17px) translate(0px, 0px);transform: translate(28px, 17px) translate(-28px, -17px) translate(0px, 0px);}100%{-webkit-transform: translate(28px, 17px) translate(-28px, -17px) translate(0px, 0px);transform: translate(28px, 17px) translate(-28px, -17px) translate(0px, 0px);}}@-webkit-keyframes el_mnl6-XynVL_KHL55YUVO_Animation{0%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) rotate(0deg) translate(-17.06185007095337px, -18.176319122314453px);transform: translate(17.06185007095337px, 18.176319122314453px) rotate(0deg) translate(-17.06185007095337px, -18.176319122314453px);}15%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) rotate(-15deg) translate(-17.06185007095337px, -18.176319122314453px);transform: translate(17.06185007095337px, 18.176319122314453px) rotate(-15deg) translate(-17.06185007095337px, -18.176319122314453px);}60%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) rotate(0deg) translate(-17.06185007095337px, -18.176319122314453px);transform: translate(17.06185007095337px, 18.176319122314453px) rotate(0deg) translate(-17.06185007095337px, -18.176319122314453px);}100%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) rotate(0deg) translate(-17.06185007095337px, -18.176319122314453px);transform: translate(17.06185007095337px, 18.176319122314453px) rotate(0deg) translate(-17.06185007095337px, -18.176319122314453px);}}@keyframes el_mnl6-XynVL_KHL55YUVO_Animation{0%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) rotate(0deg) translate(-17.06185007095337px, -18.176319122314453px);transform: translate(17.06185007095337px, 18.176319122314453px) rotate(0deg) translate(-17.06185007095337px, -18.176319122314453px);}15%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) rotate(-15deg) translate(-17.06185007095337px, -18.176319122314453px);transform: translate(17.06185007095337px, 18.176319122314453px) rotate(-15deg) translate(-17.06185007095337px, -18.176319122314453px);}60%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) rotate(0deg) translate(-17.06185007095337px, -18.176319122314453px);transform: translate(17.06185007095337px, 18.176319122314453px) rotate(0deg) translate(-17.06185007095337px, -18.176319122314453px);}100%{-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) rotate(0deg) translate(-17.06185007095337px, -18.176319122314453px);transform: translate(17.06185007095337px, 18.176319122314453px) rotate(0deg) translate(-17.06185007095337px, -18.176319122314453px);}}@-webkit-keyframes el_J194wskxoC_LqiPMerZa_Animation{0%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) rotate(0deg) translate(-29.93815040588379px, -18.176319122314453px);transform: translate(29.93815040588379px, 18.176319122314453px) rotate(0deg) translate(-29.93815040588379px, -18.176319122314453px);}15%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) rotate(15deg) translate(-29.93815040588379px, -18.176319122314453px);transform: translate(29.93815040588379px, 18.176319122314453px) rotate(15deg) translate(-29.93815040588379px, -18.176319122314453px);}60%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) rotate(0deg) translate(-29.93815040588379px, -18.176319122314453px);transform: translate(29.93815040588379px, 18.176319122314453px) rotate(0deg) translate(-29.93815040588379px, -18.176319122314453px);}100%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) rotate(0deg) translate(-29.93815040588379px, -18.176319122314453px);transform: translate(29.93815040588379px, 18.176319122314453px) rotate(0deg) translate(-29.93815040588379px, -18.176319122314453px);}}@keyframes el_J194wskxoC_LqiPMerZa_Animation{0%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) rotate(0deg) translate(-29.93815040588379px, -18.176319122314453px);transform: translate(29.93815040588379px, 18.176319122314453px) rotate(0deg) translate(-29.93815040588379px, -18.176319122314453px);}15%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) rotate(15deg) translate(-29.93815040588379px, -18.176319122314453px);transform: translate(29.93815040588379px, 18.176319122314453px) rotate(15deg) translate(-29.93815040588379px, -18.176319122314453px);}60%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) rotate(0deg) translate(-29.93815040588379px, -18.176319122314453px);transform: translate(29.93815040588379px, 18.176319122314453px) rotate(0deg) translate(-29.93815040588379px, -18.176319122314453px);}100%{-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) rotate(0deg) translate(-29.93815040588379px, -18.176319122314453px);transform: translate(29.93815040588379px, 18.176319122314453px) rotate(0deg) translate(-29.93815040588379px, -18.176319122314453px);}}#el_1lG5EnrEt *{-webkit-animation-duration: 2s;animation-duration: 2s;-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;-webkit-animation-play-state: paused;animation-play-state: paused;-webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);animation-timing-function: cubic-bezier(0, 0, 1, 1);}#el_Cpd5o8pXWv{stroke: none;stroke-width: 1;fill: none;}#el_tv1IJlG7Fd{-webkit-transform: translate(-402px, -1685px);transform: translate(-402px, -1685px);}#el_dLm9q9gvzA{-webkit-transform: translate(402px, 1685.5625px);transform: translate(402px, 1685.5625px);}#el_hfwJRe_czo{fill: #CC0000;}#el_SBOEbsepag{fill-opacity: 0.2;fill: #FFFFFF;}#el_9f7SAv3HEy{fill: #671919;}#el_mnl6-XynVL{stroke: #671919;stroke-width: 2;}#el_yfYyxsm3On{fill: #671919;-webkit-transform: translate(62px, 0px) scale(-1, 1);transform: translate(62px, 0px) scale(-1, 1);}#el_J194wskxoC{stroke: #671919;stroke-width: 2;-webkit-transform: translate(68.998178px, 0px) scale(-1, 1);transform: translate(68.998178px, 0px) scale(-1, 1);}#el_eAs2oFFOY2{stroke: #671919;stroke-width: 2;}#el_J194wskxoC_LqiPMerZa{-webkit-animation-name: el_J194wskxoC_LqiPMerZa_Animation;animation-name: el_J194wskxoC_LqiPMerZa_Animation;-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) rotate(0deg) translate(-29.93815040588379px, -18.176319122314453px);transform: translate(29.93815040588379px, 18.176319122314453px) rotate(0deg) translate(-29.93815040588379px, -18.176319122314453px);}#el_mnl6-XynVL_KHL55YUVO{-webkit-animation-name: el_mnl6-XynVL_KHL55YUVO_Animation;animation-name: el_mnl6-XynVL_KHL55YUVO_Animation;-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) rotate(0deg) translate(-17.06185007095337px, -18.176319122314453px);transform: translate(17.06185007095337px, 18.176319122314453px) rotate(0deg) translate(-17.06185007095337px, -18.176319122314453px);}#el_yfYyxsm3On_QUjxncZM4{-webkit-animation-name: el_yfYyxsm3On_QUjxncZM4_Animation;animation-name: el_yfYyxsm3On_QUjxncZM4_Animation;-webkit-transform: translate(28px, 17px) translate(-28px, -17px) translate(0px, 0px);transform: translate(28px, 17px) translate(-28px, -17px) translate(0px, 0px);}#el_9f7SAv3HEy_Vr_RzEbyJ{-webkit-animation-name: el_9f7SAv3HEy_Vr_RzEbyJ_Animation;animation-name: el_9f7SAv3HEy_Vr_RzEbyJ_Animation;-webkit-transform: translate(13px, 17px) translate(-13px, -17px) translate(0px, 0px);transform: translate(13px, 17px) translate(-13px, -17px) translate(0px, 0px);}#el_eAs2oFFOY2_bEhMbhqyZ{-webkit-animation-name: el_eAs2oFFOY2_bEhMbhqyZ_Animation;animation-name: el_eAs2oFFOY2_bEhMbhqyZ_Animation;-webkit-transform: translate(15px, 29px) translate(-15px, -29px) translate(0px, 0px);transform: translate(15px, 29px) translate(-15px, -29px) translate(0px, 0px);}#el_mnl6-XynVL_SpBftuKUs{-webkit-animation-name: el_mnl6-XynVL_SpBftuKUs_Animation;animation-name: el_mnl6-XynVL_SpBftuKUs_Animation;-webkit-transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(0px, 0px);transform: translate(17.06185007095337px, 18.176319122314453px) translate(-17.06185007095337px, -18.176319122314453px) translate(0px, 0px);}#el_J194wskxoC_chPXIwxzp{-webkit-animation-name: el_J194wskxoC_chPXIwxzp_Animation;animation-name: el_J194wskxoC_chPXIwxzp_Animation;-webkit-transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(0px, 0px);transform: translate(29.93815040588379px, 18.176319122314453px) translate(-29.93815040588379px, -18.176319122314453px) translate(0px, 0px);}#el_1lG5EnrEt:hover *{-webkit-animation-play-state: running;animation-play-state: running;}'
        }}
      />
      <g id="el_Cpd5o8pXWv" fillRule="evenodd">
        <g id="el_tv1IJlG7Fd">
          <g id="el_dLm9q9gvzA">
            <g id="el_0Buu6NHDaE">
              <circle id="el_hfwJRe_czo" cx="23.5" cy="23.5" r="23.5" />
              <path
                d="M2,14.4655631 C5.50778211,5.97106008 13.8130299,0 23.5,0 C33.1869701,0 41.4922179,5.97106008 45,14.4655631 C42.4099843,23.9966967 33.7652855,31 23.5,31 C13.2347145,31 4.59001565,23.9966967 2,14.4655631 Z"
                id="el_SBOEbsepag"
              />
              <g
                id="el_9f7SAv3HEy_Vr_RzEbyJ"
                data-animator-group="true"
                data-animator-type={0}>
                <circle id="el_9f7SAv3HEy" cx={16} cy={20} r={3} />
              </g>
              <g
                id="el_mnl6-XynVL_SpBftuKUs"
                data-animator-group="true"
                data-animator-type={0}>
                <g
                  id="el_mnl6-XynVL_KHL55YUVO"
                  data-animator-group="true"
                  data-animator-type={1}>
                  <path
                    d="M17.0618495,18.1763198 C15.6064925,16.5475463 13.8120601,15.2281922 11.7894513,14.3291567 C10.5951112,13.7982808 9.32120955,13.4139634 7.99058013,13.1990381"
                    id="el_mnl6-XynVL"
                    strokeLinecap="round"
                  />
                </g>
              </g>
              <g
                id="el_yfYyxsm3On_QUjxncZM4"
                data-animator-group="true"
                data-animator-type={0}>
                <circle id="el_yfYyxsm3On" cx={31} cy={20} r={3} />
              </g>
              <g
                id="el_J194wskxoC_chPXIwxzp"
                data-animator-group="true"
                data-animator-type={0}>
                <g
                  id="el_J194wskxoC_LqiPMerZa"
                  data-animator-group="true"
                  data-animator-type={1}>
                  <path
                    d="M39.0600272,18.1763198 C37.6046702,16.5475463 35.8102378,15.2281922 33.7876291,14.3291567 C32.5781558,13.7915542 31.287092,13.4042478 29.9381505,13.19095"
                    id="el_J194wskxoC"
                    strokeLinecap="round"
                  />
                </g>
              </g>
              <g
                id="el_eAs2oFFOY2_bEhMbhqyZ"
                data-animator-group="true"
                data-animator-type={0}>
                <path
                  d="M31,31.9830176 C28.9132749,30.1334219 26.1020357,29 23.0095583,29 C19.9076274,29 17.0886569,30.1403621 15,32"
                  id="el_eAs2oFFOY2"
                  strokeLinecap="round"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </Wrapper>
)

// @Proptypes
RankingTerribleIcon.propTypes = {
  grayscale: PropTypes.bool
}

// @Styles
const Wrapper = styled.div`
  #el_SBOEbsepag {
    fill: ${props => (props.grayscale ? '#BFBFBF' : '#FFFFFF')};
    fill-opacity: ${props => (props.grayscale ? '1' : '0.2')};
  }

  #el_9f7SAv3HEy,
  #el_yfYyxsm3On {
    fill: ${props => (props.grayscale ? '#5C5C5C' : '#671919')};
  }

  #el_J194wskxoC,
  #el_mnl6-XynVL,
  #el_eAs2oFFOY2 {
    stroke: ${props => (props.grayscale ? '#5C5C5C' : '#671919')};
  }

  #el_hfwJRe_czo {
    fill: ${props => (props.grayscale ? '#AFAFAF' : '#CC0000')};
  }

  &:hover {
    #el_SBOEbsepag {
      fill: #fff;
      fill-opacity: 0.2;
    }

    #el_9f7SAv3HEy,
    #el_yfYyxsm3On {
      fill: #671919;
    }

    #el_J194wskxoC,
    #el_mnl6-XynVL,
    #el_eAs2oFFOY2 {
      stroke: #671919;
    }

    #el_hfwJRe_czo {
      fill: #cc0000;
    }
  }
`
