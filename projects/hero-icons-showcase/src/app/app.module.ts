import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroIconsRegistry } from 'projects/hero-icons/src/lib/hero-icons-registry.service';
import {
  HeroIconsModule,
  heroIconsOutlineAcademicCap,
  heroIconsOutlineAdjustmentsHorizontal,
  heroIconsOutlineAdjustmentsVertical,
  heroIconsOutlineArchiveBoxArrowDown, heroIconsOutlineArchiveBoxXMark, heroIconsOutlineArchiveBox, heroIconsOutlineArrowDownCircle, heroIconsOutlineArrowDownLeft, heroIconsOutlineArrowDownOnSquareStack, heroIconsOutlineArrowDownOnSquare, heroIconsOutlineArrowDownRight, heroIconsOutlineArrowDownTray, heroIconsOutlineArrowDown, heroIconsOutlineArrowLeftCircle, heroIconsOutlineArrowLeftOnRectangle, heroIconsOutlineArrowLeft, heroIconsOutlineArrowLongDown, heroIconsOutlineArrowLongLeft, heroIconsOutlineArrowLongRight, heroIconsOutlineArrowLongUp, heroIconsOutlineArrowPathRoundedSquare, heroIconsOutlineArrowPath, heroIconsOutlineArrowRightCircle, heroIconsOutlineArrowRightOnRectangle, heroIconsOutlineArrowRight, heroIconsOutlineArrowSmallDown, heroIconsOutlineArrowSmallLeft, heroIconsOutlineArrowSmallRight, heroIconsOutlineArrowSmallUp, heroIconsOutlineArrowTopRightOnSquare, heroIconsOutlineArrowTrendingDown, heroIconsOutlineArrowTrendingUp, heroIconsOutlineArrowUpCircle, heroIconsOutlineArrowUpLeft, heroIconsOutlineArrowUpOnSquareStack, heroIconsOutlineArrowUpOnSquare, heroIconsOutlineArrowUpRight, heroIconsOutlineArrowUpTray, heroIconsOutlineArrowUp, heroIconsOutlineArrowUturnDown, heroIconsOutlineArrowUturnLeft, heroIconsOutlineArrowUturnRight, heroIconsOutlineArrowUturnUp, heroIconsOutlineArrowsPointingIn, heroIconsOutlineArrowsPointingOut, heroIconsOutlineArrowsRightLeft, heroIconsOutlineArrowsUpDown, heroIconsOutlineAtSymbol, heroIconsOutlineBackspace, heroIconsOutlineBackward, heroIconsOutlineBanknotes, heroIconsOutlineBars2, heroIconsOutlineBars3BottomLeft, heroIconsOutlineBars3BottomRight, heroIconsOutlineBars3CenterLeft, heroIconsOutlineBars3, heroIconsOutlineBars4, heroIconsOutlineBarsArrowDown, heroIconsOutlineBarsArrowUp, heroIconsOutlineBattery0, heroIconsOutlineBattery100, heroIconsOutlineBattery50, heroIconsOutlineBeaker, heroIconsOutlineBellAlert, heroIconsOutlineBellSlash, heroIconsOutlineBellSnooze, heroIconsOutlineBell, heroIconsOutlineBoltSlash, heroIconsOutlineBolt, heroIconsOutlineBookOpen, heroIconsOutlineBookmarkSlash, heroIconsOutlineBookmarkSquare, heroIconsOutlineBookmark, heroIconsOutlineBriefcase, heroIconsOutlineBugAnt, heroIconsOutlineBuildingLibrary, heroIconsOutlineBuildingOffice2, heroIconsOutlineBuildingOffice, heroIconsOutlineBuildingStorefront, heroIconsOutlineCake, heroIconsOutlineCalculator, heroIconsOutlineCalendarDays, heroIconsOutlineCalendar, heroIconsOutlineCamera, heroIconsOutlineChartBarSquare, heroIconsOutlineChartBar, heroIconsOutlineChartPie, heroIconsOutlineChatBubbleBottomCenterText, heroIconsOutlineChatBubbleBottomCenter, heroIconsOutlineChatBubbleLeftEllipsis, heroIconsOutlineChatBubbleLeftRight, heroIconsOutlineChatBubbleLeft, heroIconsOutlineChatBubbleOvalLeftEllipsis, heroIconsOutlineChatBubbleOvalLeft, heroIconsOutlineCheckBadge, heroIconsOutlineCheckCircle, heroIconsOutlineCheck, heroIconsOutlineChevronDoubleDown, heroIconsOutlineChevronDoubleLeft, heroIconsOutlineChevronDoubleRight, heroIconsOutlineChevronDoubleUp, heroIconsOutlineChevronDown, heroIconsOutlineChevronLeft, heroIconsOutlineChevronRight, heroIconsOutlineChevronUpDown, heroIconsOutlineChevronUp, heroIconsOutlineCircleStack, heroIconsOutlineClipboardDocumentCheck, heroIconsOutlineClipboardDocumentList, heroIconsOutlineClipboardDocument, heroIconsOutlineClipboard, heroIconsOutlineClock, heroIconsOutlineCloudArrowDown, heroIconsOutlineCloudArrowUp, heroIconsOutlineCloud, heroIconsOutlineCodeBracketSquare, heroIconsOutlineCodeBracket, heroIconsOutlineCog6Tooth, heroIconsOutlineCog8Tooth, heroIconsOutlineCog, heroIconsOutlineCommandLine, heroIconsOutlineComputerDesktop, heroIconsOutlineCpuChip, heroIconsOutlineCreditCard, heroIconsOutlineCubeTransparent, heroIconsOutlineCube, heroIconsOutlineCurrencyBangladeshi, heroIconsOutlineCurrencyDollar, heroIconsOutlineCurrencyEuro, heroIconsOutlineCurrencyPound, heroIconsOutlineCurrencyRupee, heroIconsOutlineCurrencyYen, heroIconsOutlineCursorArrowRays, heroIconsOutlineCursorArrowRipple, heroIconsOutlineDevicePhoneMobile, heroIconsOutlineDeviceTablet, heroIconsOutlineDocumentArrowDown, heroIconsOutlineDocumentArrowUp, heroIconsOutlineDocumentChartBar, heroIconsOutlineDocumentCheck, heroIconsOutlineDocumentDuplicate, heroIconsOutlineDocumentMagnifyingGlass, heroIconsOutlineDocumentMinus, heroIconsOutlineDocumentPlus, heroIconsOutlineDocumentText, heroIconsOutlineDocument, heroIconsOutlineEllipsisHorizontalCircle, heroIconsOutlineEllipsisHorizontal, heroIconsOutlineEllipsisVertical, heroIconsOutlineEnvelopeOpen, heroIconsOutlineEnvelope, heroIconsOutlineExclamationCircle, heroIconsOutlineExclamationTriangle, heroIconsOutlineEyeDropper, heroIconsOutlineEyeSlash, heroIconsOutlineEye, heroIconsOutlineFaceFrown, heroIconsOutlineFaceSmile, heroIconsOutlineFilm, heroIconsOutlineFingerPrint, heroIconsOutlineFire, heroIconsOutlineFlag, heroIconsOutlineFolderArrowDown, heroIconsOutlineFolderMinus, heroIconsOutlineFolderOpen, heroIconsOutlineFolderPlus, heroIconsOutlineFolder, heroIconsOutlineForward, heroIconsOutlineFunnel, heroIconsOutlineGif, heroIconsOutlineGiftTop, heroIconsOutlineGift, heroIconsOutlineGlobeAlt, heroIconsOutlineGlobeAmericas, heroIconsOutlineGlobeAsiaAustralia, heroIconsOutlineGlobeEuropeAfrica, heroIconsOutlineHandRaised, heroIconsOutlineHandThumbDown, heroIconsOutlineHandThumbUp, heroIconsOutlineHashtag, heroIconsOutlineHeart, heroIconsOutlineHomeModern, heroIconsOutlineHome, heroIconsOutlineIdentification, heroIconsOutlineInboxArrowDown, heroIconsOutlineInboxStack, heroIconsOutlineInbox, heroIconsOutlineInformationCircle, heroIconsOutlineKey, heroIconsOutlineLanguage, heroIconsOutlineLifebuoy, heroIconsOutlineLightBulb, heroIconsOutlineLink, heroIconsOutlineListBullet, heroIconsOutlineLockClosed, heroIconsOutlineLockOpen, heroIconsOutlineMagnifyingGlassCircle, heroIconsOutlineMagnifyingGlassMinus, heroIconsOutlineMagnifyingGlassPlus, heroIconsOutlineMagnifyingGlass, heroIconsOutlineMapPin, heroIconsOutlineMap, heroIconsOutlineMegaphone, heroIconsOutlineMicrophone, heroIconsOutlineMinusCircle, heroIconsOutlineMinusSmall, heroIconsOutlineMinus, heroIconsOutlineMoon, heroIconsOutlineMusicalNote, heroIconsOutlineNewspaper, heroIconsOutlineNoSymbol, heroIconsOutlinePaintBrush, heroIconsOutlinePaperAirplane, heroIconsOutlinePaperClip, heroIconsOutlinePauseCircle, heroIconsOutlinePause, heroIconsOutlinePencilSquare, heroIconsOutlinePencil, heroIconsOutlinePhoneArrowDownLeft, heroIconsOutlinePhoneArrowUpRight, heroIconsOutlinePhoneXMark, heroIconsOutlinePhone, heroIconsOutlinePhoto, heroIconsOutlinePlayCircle, heroIconsOutlinePlayPause, heroIconsOutlinePlay, heroIconsOutlinePlusCircle, heroIconsOutlinePlusSmall, heroIconsOutlinePlus, heroIconsOutlinePower, heroIconsOutlinePresentationChartBar, heroIconsOutlinePresentationChartLine, heroIconsOutlinePrinter, heroIconsOutlinePuzzlePiece, heroIconsOutlineQrCode, heroIconsOutlineQuestionMarkCircle, heroIconsOutlineQueueList, heroIconsOutlineRadio, heroIconsOutlineReceiptPercent, heroIconsOutlineReceiptRefund, heroIconsOutlineRectangleGroup, heroIconsOutlineRectangleStack, heroIconsOutlineRocketLaunch, heroIconsOutlineRss, heroIconsOutlineScale, heroIconsOutlineScissors, heroIconsOutlineServerStack, heroIconsOutlineServer, heroIconsOutlineShare, heroIconsOutlineShieldCheck, heroIconsOutlineShieldExclamation, heroIconsOutlineShoppingBag, heroIconsOutlineShoppingCart, heroIconsOutlineSignalSlash, heroIconsOutlineSignal, heroIconsOutlineSparkles, heroIconsOutlineSpeakerWave, heroIconsOutlineSpeakerXMark, heroIconsOutlineSquare2Stack, heroIconsOutlineSquare3Stack3D, heroIconsOutlineSquares2X2, heroIconsOutlineSquaresPlus, heroIconsOutlineStar, heroIconsOutlineStopCircle, heroIconsOutlineStop, heroIconsOutlineSun, heroIconsOutlineSwatch, heroIconsOutlineTableCells, heroIconsOutlineTag, heroIconsOutlineTicket, heroIconsOutlineTrash, heroIconsOutlineTrophy, heroIconsOutlineTruck, heroIconsOutlineTv, heroIconsOutlineUserCircle, heroIconsOutlineUserGroup, heroIconsOutlineUserMinus, heroIconsOutlineUserPlus, heroIconsOutlineUser, heroIconsOutlineUsers, heroIconsOutlineVariable, heroIconsOutlineVideoCameraSlash, heroIconsOutlineVideoCamera, heroIconsOutlineViewColumns, heroIconsOutlineViewfinderCircle, heroIconsOutlineWallet, heroIconsOutlineWifi, heroIconsOutlineWindow, heroIconsOutlineWrenchScrewdriver, heroIconsOutlineWrench, heroIconsOutlineXCircle, heroIconsOutlineXMark
} from 'projects/hero-icons/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private heroIconsRegistry: HeroIconsRegistry) {
    this.heroIconsRegistry.registerIcons({
      heroIconsOutlineAcademicCap,
      heroIconsOutlineAdjustmentsHorizontal,
      heroIconsOutlineAdjustmentsVertical,
      heroIconsOutlineArchiveBoxArrowDown, heroIconsOutlineArchiveBoxXMark, heroIconsOutlineArchiveBox, heroIconsOutlineArrowDownCircle, heroIconsOutlineArrowDownLeft, heroIconsOutlineArrowDownOnSquareStack, heroIconsOutlineArrowDownOnSquare, heroIconsOutlineArrowDownRight, heroIconsOutlineArrowDownTray, heroIconsOutlineArrowDown, heroIconsOutlineArrowLeftCircle, heroIconsOutlineArrowLeftOnRectangle, heroIconsOutlineArrowLeft, heroIconsOutlineArrowLongDown, heroIconsOutlineArrowLongLeft, heroIconsOutlineArrowLongRight, heroIconsOutlineArrowLongUp, heroIconsOutlineArrowPathRoundedSquare, heroIconsOutlineArrowPath, heroIconsOutlineArrowRightCircle, heroIconsOutlineArrowRightOnRectangle, heroIconsOutlineArrowRight, heroIconsOutlineArrowSmallDown, heroIconsOutlineArrowSmallLeft, heroIconsOutlineArrowSmallRight, heroIconsOutlineArrowSmallUp, heroIconsOutlineArrowTopRightOnSquare, heroIconsOutlineArrowTrendingDown, heroIconsOutlineArrowTrendingUp, heroIconsOutlineArrowUpCircle, heroIconsOutlineArrowUpLeft, heroIconsOutlineArrowUpOnSquareStack, heroIconsOutlineArrowUpOnSquare, heroIconsOutlineArrowUpRight, heroIconsOutlineArrowUpTray, heroIconsOutlineArrowUp, heroIconsOutlineArrowUturnDown, heroIconsOutlineArrowUturnLeft, heroIconsOutlineArrowUturnRight, heroIconsOutlineArrowUturnUp, heroIconsOutlineArrowsPointingIn, heroIconsOutlineArrowsPointingOut, heroIconsOutlineArrowsRightLeft, heroIconsOutlineArrowsUpDown, heroIconsOutlineAtSymbol, heroIconsOutlineBackspace, heroIconsOutlineBackward, heroIconsOutlineBanknotes, heroIconsOutlineBars2, heroIconsOutlineBars3BottomLeft, heroIconsOutlineBars3BottomRight, heroIconsOutlineBars3CenterLeft, heroIconsOutlineBars3, heroIconsOutlineBars4, heroIconsOutlineBarsArrowDown, heroIconsOutlineBarsArrowUp, heroIconsOutlineBattery0, heroIconsOutlineBattery100, heroIconsOutlineBattery50, heroIconsOutlineBeaker, heroIconsOutlineBellAlert, heroIconsOutlineBellSlash, heroIconsOutlineBellSnooze, heroIconsOutlineBell, heroIconsOutlineBoltSlash, heroIconsOutlineBolt, heroIconsOutlineBookOpen, heroIconsOutlineBookmarkSlash, heroIconsOutlineBookmarkSquare, heroIconsOutlineBookmark, heroIconsOutlineBriefcase, heroIconsOutlineBugAnt, heroIconsOutlineBuildingLibrary, heroIconsOutlineBuildingOffice2, heroIconsOutlineBuildingOffice, heroIconsOutlineBuildingStorefront, heroIconsOutlineCake, heroIconsOutlineCalculator, heroIconsOutlineCalendarDays, heroIconsOutlineCalendar, heroIconsOutlineCamera, heroIconsOutlineChartBarSquare, heroIconsOutlineChartBar, heroIconsOutlineChartPie, heroIconsOutlineChatBubbleBottomCenterText, heroIconsOutlineChatBubbleBottomCenter, heroIconsOutlineChatBubbleLeftEllipsis, heroIconsOutlineChatBubbleLeftRight, heroIconsOutlineChatBubbleLeft, heroIconsOutlineChatBubbleOvalLeftEllipsis, heroIconsOutlineChatBubbleOvalLeft, heroIconsOutlineCheckBadge, heroIconsOutlineCheckCircle, heroIconsOutlineCheck, heroIconsOutlineChevronDoubleDown, heroIconsOutlineChevronDoubleLeft, heroIconsOutlineChevronDoubleRight, heroIconsOutlineChevronDoubleUp, heroIconsOutlineChevronDown, heroIconsOutlineChevronLeft, heroIconsOutlineChevronRight, heroIconsOutlineChevronUpDown, heroIconsOutlineChevronUp, heroIconsOutlineCircleStack, heroIconsOutlineClipboardDocumentCheck, heroIconsOutlineClipboardDocumentList, heroIconsOutlineClipboardDocument, heroIconsOutlineClipboard, heroIconsOutlineClock, heroIconsOutlineCloudArrowDown, heroIconsOutlineCloudArrowUp, heroIconsOutlineCloud, heroIconsOutlineCodeBracketSquare, heroIconsOutlineCodeBracket, heroIconsOutlineCog6Tooth, heroIconsOutlineCog8Tooth, heroIconsOutlineCog, heroIconsOutlineCommandLine, heroIconsOutlineComputerDesktop, heroIconsOutlineCpuChip, heroIconsOutlineCreditCard, heroIconsOutlineCubeTransparent, heroIconsOutlineCube, heroIconsOutlineCurrencyBangladeshi, heroIconsOutlineCurrencyDollar, heroIconsOutlineCurrencyEuro, heroIconsOutlineCurrencyPound, heroIconsOutlineCurrencyRupee, heroIconsOutlineCurrencyYen, heroIconsOutlineCursorArrowRays, heroIconsOutlineCursorArrowRipple, heroIconsOutlineDevicePhoneMobile, heroIconsOutlineDeviceTablet, heroIconsOutlineDocumentArrowDown, heroIconsOutlineDocumentArrowUp, heroIconsOutlineDocumentChartBar, heroIconsOutlineDocumentCheck, heroIconsOutlineDocumentDuplicate, heroIconsOutlineDocumentMagnifyingGlass, heroIconsOutlineDocumentMinus, heroIconsOutlineDocumentPlus, heroIconsOutlineDocumentText, heroIconsOutlineDocument, heroIconsOutlineEllipsisHorizontalCircle, heroIconsOutlineEllipsisHorizontal, heroIconsOutlineEllipsisVertical, heroIconsOutlineEnvelopeOpen, heroIconsOutlineEnvelope, heroIconsOutlineExclamationCircle, heroIconsOutlineExclamationTriangle, heroIconsOutlineEyeDropper, heroIconsOutlineEyeSlash, heroIconsOutlineEye, heroIconsOutlineFaceFrown, heroIconsOutlineFaceSmile, heroIconsOutlineFilm, heroIconsOutlineFingerPrint, heroIconsOutlineFire, heroIconsOutlineFlag, heroIconsOutlineFolderArrowDown, heroIconsOutlineFolderMinus, heroIconsOutlineFolderOpen, heroIconsOutlineFolderPlus, heroIconsOutlineFolder, heroIconsOutlineForward, heroIconsOutlineFunnel, heroIconsOutlineGif, heroIconsOutlineGiftTop, heroIconsOutlineGift, heroIconsOutlineGlobeAlt, heroIconsOutlineGlobeAmericas, heroIconsOutlineGlobeAsiaAustralia, heroIconsOutlineGlobeEuropeAfrica, heroIconsOutlineHandRaised, heroIconsOutlineHandThumbDown, heroIconsOutlineHandThumbUp, heroIconsOutlineHashtag, heroIconsOutlineHeart, heroIconsOutlineHomeModern, heroIconsOutlineHome, heroIconsOutlineIdentification, heroIconsOutlineInboxArrowDown, heroIconsOutlineInboxStack, heroIconsOutlineInbox, heroIconsOutlineInformationCircle, heroIconsOutlineKey, heroIconsOutlineLanguage, heroIconsOutlineLifebuoy, heroIconsOutlineLightBulb, heroIconsOutlineLink, heroIconsOutlineListBullet, heroIconsOutlineLockClosed, heroIconsOutlineLockOpen, heroIconsOutlineMagnifyingGlassCircle, heroIconsOutlineMagnifyingGlassMinus, heroIconsOutlineMagnifyingGlassPlus, heroIconsOutlineMagnifyingGlass, heroIconsOutlineMapPin, heroIconsOutlineMap, heroIconsOutlineMegaphone, heroIconsOutlineMicrophone, heroIconsOutlineMinusCircle, heroIconsOutlineMinusSmall, heroIconsOutlineMinus, heroIconsOutlineMoon, heroIconsOutlineMusicalNote, heroIconsOutlineNewspaper, heroIconsOutlineNoSymbol, heroIconsOutlinePaintBrush, heroIconsOutlinePaperAirplane, heroIconsOutlinePaperClip, heroIconsOutlinePauseCircle, heroIconsOutlinePause, heroIconsOutlinePencilSquare, heroIconsOutlinePencil, heroIconsOutlinePhoneArrowDownLeft, heroIconsOutlinePhoneArrowUpRight, heroIconsOutlinePhoneXMark, heroIconsOutlinePhone, heroIconsOutlinePhoto, heroIconsOutlinePlayCircle, heroIconsOutlinePlayPause, heroIconsOutlinePlay, heroIconsOutlinePlusCircle, heroIconsOutlinePlusSmall, heroIconsOutlinePlus, heroIconsOutlinePower, heroIconsOutlinePresentationChartBar, heroIconsOutlinePresentationChartLine, heroIconsOutlinePrinter, heroIconsOutlinePuzzlePiece, heroIconsOutlineQrCode, heroIconsOutlineQuestionMarkCircle, heroIconsOutlineQueueList, heroIconsOutlineRadio, heroIconsOutlineReceiptPercent, heroIconsOutlineReceiptRefund, heroIconsOutlineRectangleGroup, heroIconsOutlineRectangleStack, heroIconsOutlineRocketLaunch, heroIconsOutlineRss, heroIconsOutlineScale, heroIconsOutlineScissors, heroIconsOutlineServerStack, heroIconsOutlineServer, heroIconsOutlineShare, heroIconsOutlineShieldCheck, heroIconsOutlineShieldExclamation, heroIconsOutlineShoppingBag, heroIconsOutlineShoppingCart, heroIconsOutlineSignalSlash, heroIconsOutlineSignal, heroIconsOutlineSparkles, heroIconsOutlineSpeakerWave, heroIconsOutlineSpeakerXMark, heroIconsOutlineSquare2Stack, heroIconsOutlineSquare3Stack3D, heroIconsOutlineSquares2X2, heroIconsOutlineSquaresPlus, heroIconsOutlineStar, heroIconsOutlineStopCircle, heroIconsOutlineStop, heroIconsOutlineSun, heroIconsOutlineSwatch, heroIconsOutlineTableCells, heroIconsOutlineTag, heroIconsOutlineTicket, heroIconsOutlineTrash, heroIconsOutlineTrophy, heroIconsOutlineTruck, heroIconsOutlineTv, heroIconsOutlineUserCircle, heroIconsOutlineUserGroup, heroIconsOutlineUserMinus, heroIconsOutlineUserPlus, heroIconsOutlineUser, heroIconsOutlineUsers, heroIconsOutlineVariable, heroIconsOutlineVideoCameraSlash, heroIconsOutlineVideoCamera, heroIconsOutlineViewColumns, heroIconsOutlineViewfinderCircle, heroIconsOutlineWallet, heroIconsOutlineWifi, heroIconsOutlineWindow, heroIconsOutlineWrenchScrewdriver, heroIconsOutlineWrench, heroIconsOutlineXCircle, heroIconsOutlineXMark
    });
  }

}