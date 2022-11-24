export const createHtml = ({
  primaryBody,
  primaryButton,
  title,
  secondaryBody,
  articleUrl,
}: {
  primaryBody: string,
  primaryButton: string,
  title: string,
  secondaryBody: string,
  articleUrl: string,
}) => `
<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		@media (max-width:700px) {

			.desktop_hide table.icons-inner,
			.row-3 .column-1 .block-4.button_block .alignment div,
			.row-4 .column-1 .block-2.button_block .alignment div,
			.row-4 .column-1 .block-6.button_block .alignment div,
			.social_block.desktop_hide .social-table {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.image_block img.big,
			.row-content {
				width: 100% !important;
			}

			.mobile_hide {
				display: none;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}

			.row-3 .column-1 .block-4.button_block td.pad,
			.row-4 .column-1 .block-2.button_block td.pad,
			.row-4 .column-1 .block-6.button_block td.pad {
				padding: 15px 10px 10px 20px !important;
			}

			.row-3 .column-1 .block-4.button_block a span,
			.row-3 .column-1 .block-4.button_block div,
			.row-3 .column-1 .block-4.button_block div span,
			.row-4 .column-1 .block-2.button_block a span,
			.row-4 .column-1 .block-2.button_block div,
			.row-4 .column-1 .block-2.button_block div span,
			.row-4 .column-1 .block-6.button_block a span,
			.row-4 .column-1 .block-6.button_block div,
			.row-4 .column-1 .block-6.button_block div span {
				font-size: 14px !important;
				line-height: 2 !important;
			}

			.row-3 .column-1 .block-4.button_block .alignment,
			.row-4 .column-1 .block-2.button_block .alignment,
			.row-4 .column-1 .block-6.button_block .alignment {
				text-align: center !important;
			}
		}
	</style>
</head>

<body style="background-color: #223843; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #223843;">
		<tbody>
			<tr>
				<td>
					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff6de;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:25px;">
																<div class="alignment" align="center" style="line-height:10px"><img class="big" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/877584_861759/flaqcover%20%281%29.png" style="display: block; height: auto; border: 0; width: 680px; max-width: 100%;" width="680"></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff6de;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
										<tbody>
											<tr>
												<td class="column column-1" width="16.666666666666668%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<div class="spacer_block" style="height:10px;line-height:5px;font-size:1px;">&#8202;</div>
												</td>
												<td class="column column-2" width="66.66666666666667%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="icons_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; text-align: center; padding-top: 5px;">
																<table class="alignment" cellpadding="0" cellspacing="0" role="presentation" align="center" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	<tr>
																		<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><img class="icon" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/877584_861759/Flaq%20Logo.png" alt="Company Logo" height="32" width="32" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
													<table class="heading_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="text-align:center;width:100%;">
																<h1 style="margin: 0; color: #223843; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 33px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">${title}</span></h1>
															</td>
														</tr>
													</table>
													<table class="text_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:10px;padding-top:20px;">
																<div style="font-family: sans-serif">
																	<div class style="font-size: 14px; mso-line-height-alt: 25.2px; color: #393d47; line-height: 1.8; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
																		<p dir="ltr" style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 28.8px;" aria-level="1"><span style="font-size:16px;">${primaryBody} <br></span></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:40px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;">
																<div class="alignment" align="center">
																	<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${articleUrl}" style="height:44px;width:205px;v-text-anchor:middle;" arcsize="10%" strokeweight="0.75pt" strokecolor="#223843" fillcolor="#223843"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a href="${articleUrl}" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#223843;border-radius:4px;width:auto;border-top:1px solid #223843;font-weight:400;border-right:1px solid #223843;border-bottom:1px solid #223843;border-left:1px solid #223843;padding-top:5px;padding-bottom:5px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:35px;padding-right:35px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word;"><strong><span class style="line-height: 32px;" dir="ltr" data-mce-style>${primaryButton}</span></strong></span></span></a>
																	<!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-3" width="16.666666666666668%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<div class="spacer_block" style="height:10px;line-height:5px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1b2e36;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-left:20px;text-align:center;width:100%;padding-top:40px;">
																<h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 33px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: left; margin-top: 0; margin-bottom: 0;"><strong>Learn with Flaq Academy 🚀</strong></h1>
															</td>
														</tr>
													</table>
													<table class="text_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:20px;">
																<div style="font-family: sans-serif">
																	<div class style="font-size: 14px; mso-line-height-alt: 25.2px; color: #dedede; line-height: 1.8; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
																		<p aria-level="1" style="margin: 0; mso-line-height-alt: 25.2px;">Flaq is a community-driven DAO, free of cost, and widely accessible educational platform for ALL things web3. Come check us out!</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:20px;text-align:center;">
																<div class="alignment" align="center">
																	<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://flaq.club" style="height:34px;width:154px;v-text-anchor:middle;" arcsize="12%" strokeweight="0.75pt" strokecolor="#FFEE91" fillcolor="#ffee91"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#223843; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a href="https://flaq.club" target="_blank" style="text-decoration:none;display:inline-block;color:#223843;background-color:#ffee91;border-radius:4px;width:auto;border-top:1px solid #FFEE91;font-weight:400;border-right:1px solid #FFEE91;border-bottom:1px solid #FFEE91;border-left:1px solid #FFEE91;padding-top:0px;padding-bottom:0px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:15px;padding-right:15px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word;"><span class style="line-height: 32px;" dir="ltr" data-mce-style><strong>Check out Flaq!</strong></span></span></span></a>
																	<!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1b2e36;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="text_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:20px;">
																<div style="font-family: sans-serif">
																	<div class style="font-size: 14px; mso-line-height-alt: 25.2px; color: #dedede; line-height: 1.8; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">${secondaryBody}</div>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:20px;text-align:center;">
																<div class="alignment" align="center">
																	<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://learn.flaq.club" style="height:34px;width:261px;v-text-anchor:middle;" arcsize="12%" strokeweight="0.75pt" strokecolor="#FFEE91" fillcolor="#ffee91"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#223843; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a href="https://learn.flaq.club" target="_blank" style="text-decoration:none;display:inline-block;color:#223843;background-color:#ffee91;border-radius:4px;width:auto;border-top:1px solid #FFEE91;font-weight:400;border-right:1px solid #FFEE91;border-bottom:1px solid #FFEE91;border-left:1px solid #FFEE91;padding-top:0px;padding-bottom:0px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:15px;padding-right:15px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;"><strong>Find our previous pieces here</strong></span></span></a>
																	<!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
																</div>
															</td>
														</tr>
													</table>
													<table class="heading_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-left:20px;text-align:center;width:100%;padding-top:40px;">
																<h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 33px; font-weight: 400; letter-spacing: normal; line-height: 150%; text-align: left; margin-top: 0; margin-bottom: 0;"><strong>Master the web3 lingo </strong></h1>
															</td>
														</tr>
													</table>
													<table class="text_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:20px;">
																<div style="font-family: sans-serif">
																	<div class style="font-size: 14px; mso-line-height-alt: 25.2px; color: #dedede; line-height: 1.8; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
																		<p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 28.8px;"><span style="font-size:16px;">Flaq’s very own, specially curated, web3 dictionary is here to give you a (very) brief idea of what the web3 terms in the articles mean.</span></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-6" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:20px;text-align:center;">
																<div class="alignment" align="center">
																	<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://learn.flaq.club/web3-lingo/web3-dictionary" style="height:34px;width:96px;v-text-anchor:middle;" arcsize="12%" strokeweight="0.75pt" strokecolor="#FFEE91" fillcolor="#ffee91"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#223843; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a href="https://learn.flaq.club/web3-lingo/web3-dictionary" target="_blank" style="text-decoration:none;display:inline-block;color:#223843;background-color:#ffee91;border-radius:4px;width:auto;border-top:1px solid #FFEE91;font-weight:400;border-right:1px solid #FFEE91;border-bottom:1px solid #FFEE91;border-left:1px solid #FFEE91;padding-top:0px;padding-bottom:0px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:15px;padding-right:15px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;"><strong>Go Nuts<br></strong></span></span></a>
																	<!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
										<tbody>
											<tr>
												<td class="column column-1" width="66.66666666666667%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:15px;">
																<div style="font-family: sans-serif">
																	<div class style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
																		<p style="margin: 0; font-size: 18px; text-align: left; mso-line-height-alt: 21.599999999999998px;"><strong><span style="color:#ffffff;">Our Vision<br></span></strong></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table class="text_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="font-family: sans-serif">
																	<div class style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #C0C0C0; line-height: 1.2;">
																		<p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 16.8px;"><span style="color:#C0C0C0;font-size:12px;">We want to be the answer to every web3 question you may have. The underlying vision of Flaq is to help onboard the next 10Mn web2 native folks to the web3 world seamlessly through a transparent and community-driven approach.</span></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table class="html_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:5px;">
																<div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;" align="center"><div style="height:20px;">&nbsp;</div></div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:15px;">
																<div style="font-family: sans-serif">
																	<div class style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
																		<p style="margin: 0; font-size: 18px; text-align: left; mso-line-height-alt: 21.599999999999998px;"><strong><span style="color:#ffffff;">Social Media</span></strong></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table class="social_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-left:10px;padding-top:10px;text-align:left;padding-right:0px;padding-bottom:5px;">
																<div class="alignment" align="left">
																	<table class="social-table" width="141px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
																		<tr>
																			<td style="padding:0 15px 0 0;"><a href="https://twitter.com/flaq_club" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-default-gray/twitter@2x.png" width="32" height="32" alt="Twitter" title="Twitter" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 15px 0 0;"><a href="https://t.me/+pUwD3bO2KAA0NTI1" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-default-gray/telegram@2x.png" width="32" height="32" alt="Telegram" title="Telegram" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 15px 0 0;"><a href="https://www.linkedin.com/company/flaq-club/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-default-gray/linkedin@2x.png" width="32" height="32" alt="LinkedIn" title="LinkedIn" style="display: block; height: auto; border: 0;"></a></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<div class="spacer_block" style="height:35px;line-height:35px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>
`;
