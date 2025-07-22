import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { supabase } from "@/lib/supabase";

const Contact = () => {
  const { toast } = useToast();
@@ -20,8 +21,9 @@
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
@@ -34,21 +36,52 @@
      return;
    }

    setIsSubmitting(true);
    try {
      // Insert the contact message into Supabase
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            company: formData.company || null,
            service: formData.service || null,
            message: formData.message
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
@@ -236,76 +269,76 @@
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Office Info */}
            <div className="space-y-6">
              {/* Google Maps Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Find Our Headquarters</CardTitle>
                  <CardDescription>
                    Visit our headquarters in the heart of Lagos, Nigeria
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d991.1632556565611!2d3.5172832!3d6.4385881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf71685438a65%3A0xb2ffd9e6248ffdb!2sGeoterrain%20Nigeria%20Limited!5e0!3m2!1sen!2sng!4v1752859660580!5m2!1sen!2sng"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="GeoTerrain Nigeria Office Location"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">GeoTerrain Nigeria Limited</p>
                        <br />
                        <p className="font-medium">Lagos Office</p>
                        <p className="text-sm text-muted-foreground">
                          1A, Dele Adeyemi Street, Agungi East Estate<br />
                          Lekki, Lagos State, <br />
                          Nigeria
                        </p> <br />
                        <p className="font-medium">Port Harcourt Office</p>
                        <p className="text-sm text-muted-foreground">
                          Plot HC 50, Enugu Street, Rumuobiakani, <br />
                          Port Harcourt, <br />Nigeria.
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://maps.app.goo.gl/DChpWvsWK8FDLPndA" target="_blank" rel="noopener noreferrer">
                        <MapPin className="w-4 h-4 mr-2" />
                        Get Directions to Lagos Office
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Office Information */}

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;