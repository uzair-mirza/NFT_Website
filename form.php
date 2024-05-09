<?php 
echo '<section class="black-bg form_area pt-5"  >
    
    <div class="container">
        
        <div class="nft-form-wrapper ">
            
            <div class="nft-form-inner">
                <div class="row ">
                    
                    <div class="col-xl-6 col-12 col-sm-12 col-lg-6 col-md-6">
                        <div class="nft-form-box">
                           
                            <form action="include/contact-form.php" method="post">
                                <div class="row">
                                   
                                        <!------ Above gets rid of arrows on number boxes ---------->
                                        <div class="col-lg-6">
                                            <div class="qty">
                                                <label class="mushkil">Head:</label>
                                                <span class="minus">-</span>
                                                <input type="number" class="count" name="Properties[Head]" value="1" />
                                                <span class="plus">+</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="qty">
                                                <label class="mushkil">Eyes:</label>
                                                <span class="minus">-</span>
                                                <input type="number" class="count" name="Properties[Eyes]" value="1" />
                                                <span class="plus">+</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="qty">
                                                <label class="mushkil">Cloths:</label>
                                                <span class="minus">-</span>
                                                <input type="number" class="count" name="Properties[Cloths]" value="1" />
                                                <span class="plus">+</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="qty">
                                                <label class="mushkil">Earrings:</label>
                                                <span class="minus">-</span>
                                                <input type="number" class="count" name="Properties[Earrings]" value="1" />
                                                <span class="plus">+</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="qty">
                                                <label class="mushkil">Background:</label>
                                                <span class="minus">-</span>
                                                <input type="number" class="count" name="Properties[Background]" value="1" />
                                                <span class="plus">+</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="qty">
                                                <label class="mushkil">Mouth:</label>
                                                <span class="minus">-</span>
                                                <input type="number" class="count" name="Properties[Mouth]" value="1" />
                                                <span class="plus">+</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="qty">
                                                <label class="mushkil">Legendry:</label>
                                                <span class="minus">-</span>
                                                <input type="number" class="count" name="Properties[Legendry]" value="1" />
                                                <span class="plus">+</span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="qty">
                                                <label class="mushkil">Character:</label>
                                                <span class="minus">-</span>
                                                <input type="number" class="count" name="Properties" value="1" />
                                                <span class="plus">+</span>
                                            </div>
                                        </div>

                                        <div class="col-lg-6 cck">
                                            <label class="form-check-label" for="flexCheckDefault">
                                                <input class="form-check-input" name="check1" style="width: 40px!important;height: 40px!important;margin: 0px 31px 0px 0px;" id="flexCheckDefault" type="checkbox" value="1"/>Default checkbox
                                              </label>
                                        </div>
                                        <div class="col-lg-6 pt-3 cck">
                                            <label class="form-check-label" for="flexCheckDefault">
                                                <input class="form-check-input " name="check1" style="width: 40px!important;height: 40px!important;margin: 0px 31px 0px 0px;" id="flexCheckDefault" type="checkbox" value="1"/>Default checkbox
                                              </label>
                                        </div>
                                        <div class="col-lg-6 pt-3 cck">
                                            <label class="form-check-label" for="flexCheckDefault">
                                                <input class="form-check-input " name="check3" style="width: 40px!important;height: 40px!important;margin: 0px 31px 0px 0px;" id="flexCheckDefault" type="checkbox" value="1"/>Default checkbox
                                              </label>
                                        </div>
                                        
                                          <div class="lln">
                                            <div class="line-white"></div>
                                            <span style="opacity: 50%;">
                                                Personal Info
                                            </span>
                                            <div class="line-white"></div>
                                          </div>           
                                

                                    <div class="col-xl-12">
                                        <input type="text" id="name" name="fullname" placeholder="Your Name" required="" />
                                    </div>
                                    <div class="col-xl-12">
                                        <input type="email" id="email" name="email" placeholder="Your Email Address" required="" />
                                    </div>
                              
                                    <div class="col-xl-12">
                                        <input type="tel" name="phone" id="phone" placeholder="Phone Number" />
                                    </div>
                                    <div class="col-xl-12">
                                        <textarea id="subject" name="message"  placeholder="Describe yourself here..." />

                                        </textarea>
                                        <!-- <input type="textarea" id="subject" name="subject" placeholder="Subject"> -->
                                    </div>
                                  
                                    <div class="col-xl-12" style="text-align:end;">
                                        <input type="submit" name="submit" class="nft-form-button" style="width: 30%;" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-xl-6 col-12 col-sm-12 col-lg-6 col-md-6">
                        <div class="nft-form-title-box mb-50">
                            <h4 class="nft-form-title">Tell Us What You  <span class="ppr">Need?</span></h4>
                            <p>Contact our professional team to tell us your project requirements. We<span class="d-block"></span>approach each client intending to satisfy and build a long-term relationship. <span class="d-block"></span>At NFT Genies, we provide your business with end-to-end,<span class="d-block"></span> customer-oriented artwork and design solutions.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
 </section>'; 
 ?>
<!-- END TOP COLLECTION AREA -->